import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Subject } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as COS from 'cos-js-sdk-v5';

@Injectable({
  providedIn: 'root'
})
export class CosService {
  cos: any = null;
  config = {
    Bucket: 'wbp-1258344700',
    Region: 'ap-guangzhou',
    Prefix: 'upload'
  };

  startTime = null;
  expiredTime = null;
  nowTime: number = 0;
  credentials:any = null;
  upload$ = new Subject();

  constructor(
    private http: HttpClient,
    private message: NzMessageService,
    private notification: NzNotificationService
  ) {
    this.cos = new COS({
      getAuthorization: this.getAuthorization,
      UploadCheckContentMd5: true,
      ProgressInterval: 1000,
    });
  }

  // 必选参数
  getAuthorization = (options: any, callback: any) => {
    // 服务端 JS 和 PHP 例子：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
    // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
    // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
    // console.log('2333');


    this.nowTime = Math.floor(new Date().getTime() / 1000)
    // 每15分钟获取一次授权, 
    if (!this.startTime || (this.nowTime - this.startTime > 60 * 15)) {
      this.http.get('web/cos/sts').subscribe((res: any)  => {
        if (res && res?.code ) {
          const data = res['data'];
          this.startTime = res['data']['startTime']
          this.expiredTime = res['data']['expiredTime']

          this.credentials = data && data['credentials'];
          if (!data || !this.credentials) {
            return console.error('credentials invalid');
          }
  
          const authorization = COS.getAuthorization({
              SecretId: this.credentials?.tmpSecretId,
              SecretKey: this.credentials?.tmpSecretKey,
              Method: options.Method,
              Pathname: options.Pathname,
              Query: options.Query,
              Headers: options.Headers,
              Expires: 60 * 60 * 2,
          });
  
          callback({
            Authorization: authorization,
            XCosSecurityToken: this.credentials.sessionToken,
          });
        } else {
          this.message.error('您电脑时间可能差异过大导致无法上传，请校对电脑时间后重新上传');
        }
      }); 
    } else {
      const authorization = COS.getAuthorization({
        SecretId: this.credentials.tmpSecretId,
        SecretKey: this.credentials.tmpSecretKey,
        Method: options.Method,
        Pathname: options.Pathname,
        Query: options.Query,
        Headers: options.Headers,
        Expires: 900,
    });

      callback({
        Authorization: authorization,
        XCosSecurityToken: this.credentials.sessionToken,
      });
    }
  }

  uploadFile = (item: any) => {
    item.file.object_id =  this.getQueryUrl(item.action, 'id');
    item.file.object_type =  this.getQueryUrl(item.action, 'type');

    const pattern=/[`~!@#$^&*()=|{}':;',\\\[\]<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
    const filename = item.file.name.replace(pattern,"");

    return new Observable ((observed) => {
      this.upload$.next(item);
      this.http.get('web/cos/info').subscribe((res: any)  => {
        this.cos.uploadFile({
          Bucket:     res['bucket'],
          Region:     res['region'],
          Key:        res['prefix'] + filename,
          StorageClass: 'STANDARD',
          SliceSize: 1024 * 1024 * 5,
          AsyncLimit: 5,
          Body: item.file, // 上传文件对象
          onTaskReady: function(taskId: string) {
            item['file']['taskId'] = taskId;
          },
          onProgress: function(progressData: any) {
            const percent = {
              ...progressData,
              percent: progressData.percent * 100
            };
            item.percent = percent;
            item.onProgress(item.percent);
            this.upload$.next(item);
          },
        }, (err: any, data: any) => {
          if (data) {
            this.http.get('web/cos/upload', {
              params: {
                file_size: item.file.size + '',
                file_name: item.file.name + '',
                file_path: data['Location'],
                file_type: item.file.type,
                object_id: item.file.object_id,
                object_type: item.file.object_type,
              }
            }).subscribe((res: any) => {
              if (res['code'] === 0) {
                item['file']['file_id'] = res['data']['file_id'];
                observed.next(item);
                this.upload$.next(item);
              } else {
                observed.error(res);
                this.message.error(res['msg'] || '文件上传失败, 请稍后再试!');
              }
            }, error => {
              observed.error(error);
              this.message.error('文件上传失败, 请稍后再试!');
            });
          } else if (err) {
            observed.error(err);
            this.message.error('您电脑时间可能差异过大导致无法上传，请校对电脑时间后重新上传');
          }
        });
      }, err => {
        observed.error(err);
      });
    });
  }

  cancelTask(taskId: string) {
    this.cos.cancelTask(taskId);
  }

  restartTask (taskId: string) {
    this.cos.restartTask(taskId);
  }

  getQueryUrl(url:any, variable:any) {
    const query = url.split('?')[1];
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (pair[0] === variable) {
        return pair[1] + '';
      }
    }
    return '';
  }

  customReqs = (item: any) => {
    return this.uploadFile(item).subscribe(
      (event) => {

        item.onSuccess(event, item.file, event);
      }, err => {

        item.onError(err, item.file);
      }
    );
  }

  beforeUploadImg = (file: File) => {
    const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif');

    const isLt2M = file.size / 1024 / 1024 < 24;

    return isJPG && isLt2M;
  }

  // 大文件上传校验
  beforeUploadFile = (file: File) => {

    // 检验图片类型和像素大小
    const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
    const  isLt2M = file.size  < 1024 * 1024 * 24;


    // 要求上传格式
    const fileTypes = ['jpg', 'gif', 'png', 'psd', 'ai', 'jpeg',
        'bmp', 'doc', 'docx', 'xls', 'xlsx', 'ppt',
        'pptx', 'pdf', 'zip', '7z', 'tga', 'rar', 'mp3',
        'mp4', 'mov', 'wmv', 'avi', 'swf', 'fla', 'wav',
        'ogg', 'aif', 'aiff', 'flac', 'caf', 'mpg', 'mpeg', 'wma', 'eml', 'txt', 'msg'];
    const fileNames = file.name.split('.');
    const isFILE = fileTypes.some(type => fileNames[fileNames.length - 1] == type);

    const isLt4G = file.size < 4294967296;

    return isFILE && isLt4G;
  }

  // 文件上传校验
  beforeUpload = (file: File) => {
    // object_type: this.getQueryUrl(item.action, 'type'),
    const fileTypes = ['jpg', 'gif', 'png', 'psd', 'ai', 'jpeg',
        'bmp', 'doc', 'docx', 'xls', 'xlsx', 'ppt',
        'pptx', 'pdf', 'zip', '7z', 'tga', 'rar', 'mp3',
        'mp4', 'mov', 'wmv', 'avi', 'swf', 'fla', 'wav',
        'ogg', 'aif', 'aiff', 'flac', 'caf', 'mpg', 'mpeg', 'wma', 'eml', 'txt', 'msg'];
    const fileNames = file.name.split('.');
    const isFILE = fileTypes.some(type => fileNames[fileNames.length - 1] == type);

    const isLt4G = file.size < 4294967296;

    return isFILE && isLt4G;
  }

  // 文件上传校验
  beforeUploadExcel = (file: File) => {
    const fileTypes = ['xlsx', 'csv'];
    const fileNames = file.name.split('.');
    const isFILE = fileTypes.some(type => fileNames[fileNames.length - 1] == type);
    if (!isFILE) {
      this.message.error(file.name + `格式不对，格式要求：csv, xlsx`);
    }
    return isFILE;
  }

  delFile (id: string) {
    return new Observable ((observed) => {
      this.http.post('web/cos/del-file', {
        file_id: id
      }).subscribe((result: any) => {
        if (result?.code === 0) {
          observed.next();
        } else {
          observed.error();
        }
      }, (err) => {
        observed.error();
      });
    })
  }
}