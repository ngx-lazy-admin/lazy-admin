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
  config = {};
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

    this.nowTime = Math.floor(new Date().getTime() / 1000)
    // 每15分钟获取一次授权, 
    if (!this.startTime || (this.nowTime - this.startTime > 60 * 15)) {
      this.http.get('/cos/sts').subscribe((res: any)  => {
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

    return new Observable ((observed) => {
      this.upload$.next(item);
      this.cos.uploadFile({
        Bucket:     this.config['bucket'],
        Region:     res['region'],
        Key:        res['prefix'] + item.file.name,
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
          console.log(data)
        }
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

  customReq = (item: any) => {
    return this.uploadFile(item).subscribe(
      (event) => {
        item.onSuccess(event, item.file, event);
      }, err => {
        item.onError(err, item.file);
      }
    );
  }
}