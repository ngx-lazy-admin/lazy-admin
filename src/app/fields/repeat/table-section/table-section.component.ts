import { Component, ViewChild, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';

import { NzMessageService, UploadXHRArgs } from 'ng-zorro-antd';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject, Observable, Observer} from 'rxjs';
import { UploadService } from '../../../../services/upload.service';
import { MessageService } from '../../../../services/message.service';
import { CosService } from 'projects/oa/src/app/services/cos.service';

@Component({
  selector: 'app-repeat-section',
  templateUrl: './table-section.component.html',
  styles: [`
    :host ::ng-deep .ant-table-row{
      border: 1px solid #e8e8e8;
    }

    :host ::ng-deep .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
      padding: 6px 6px;
      word-break: break-word;
      -ms-word-break: break-all;
    }

    :host ::ng-deep .ant-upload.ant-upload-drag .ant-upload-btn {
      padding: 0;
    }
  `]
})

export class TableSectionComponent extends FieldArrayType implements OnInit, OnDestroy {

  @ViewChild('TitleTemplate') titleTemplate: TemplateRef<any>;

  @ViewChild('FooterTemplate') footerTemplate: TemplateRef<any>;

  nzTitle;

  nzFooter;

  event: String = '';

  copyContent = null;

  radioOptions = [];

  category_id = null;

  fileList = [];

  user_role_level = null;

  fileMessageId;

  onDestroy$ = new Subject<void>();

  constructor(
    builder: FormlyFormBuilder,
    private http: HttpClient,
    private uploadService: UploadService,
    private msg: MessageService,
    private message: NzMessageService,
    public cos: CosService
  ) {
    super(builder);
  }

  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    }
  ];

  isAllDisplayDataChecked = false;
  isIndeterminate = false;

  ngOnInit () {
      // 设置标题
      if (this.to['nzTitleTemplate']) {
        this.nzTitle = this.titleTemplate;
      } else {
        this.nzTitle = this.to['nzTitle'];
      }

      // 表格尾部
      if (this.to['nzFooterTemplate']) {
        this.nzFooter = this.footerTemplate;
      } else {
        this.nzFooter = this.to['nzFooter'];
      }

      if (this.form.root.get('user_role_level')) {
        this.user_role_level = this.form.root.get('user_role_level').value;
      }

      this.formControl.valueChanges.pipe(takeUntil(this.onDestroy$)).pipe(debounceTime(100)).subscribe(item => {
        if (item && item.length > 0) {
          this.isIndeterminate = item.some(item => item.is_test) && !item.every(item => item.is_test);
        }
      });
  }

  // 全选
  checkAll(value: boolean): void {

    let listData = this.formControl.value;

    listData = listData.map((item, index) => {
      return {
        ...item,
        is_test: value,
        category_id: item.category_id ? item.category_id : null,
        pre_produce_grade_id: item.pre_produce_grade_id ? item.pre_produce_grade_id : null
      };
    });

    this.isAllDisplayDataChecked = listData.every(item => item.is_test);

    this.isIndeterminate = listData.some(item => item.is_test) && !this.isAllDisplayDataChecked;

    this.formControl.setValue(listData);
  }

  updateValue (item, index) {
    switch (item.type) {
      case 'copy':
        this.copy(item, index);
        break;
      case 'copyText':
        this.copyText(item, index);
        break;
      case 'remove':
        super.remove(index);
        this.message.success('删除成功');
        break;
      case 'add':
        super.add();
        break;
      case 'paste':
        this.paste(index);
        break;
      default:
      break;
    }
  }

  copyText (item, index) {
    this.copyContent = {
      data: this.model[index],
      index: index
    };
  }

  copy (item, index) {
    const model = Object.assign({}, this.model[index], {id: null, thing_code: 'NA'});
    super.add(index + 1, model);
    this.message.success('物件复制成功');
  }

  paste (index) {
    const target = Object.assign({}, this.copyContent.data, {label: this.model[index].label, id: this.model[index].id} );
    super.remove(index);
    super.add(index, target );
  }

  adds () {
    const index = this.model && this.model.length ? this.model.length : 0;
    super.add(index , {category_id: this.category_id});
  }

  // 下载附件
  download () {
    if (this.category_id) {
      const id = this.message.loading('正在下载附件..', { nzDuration: 0 }).messageId;
      this.http.get('/web/demand/download-template', {
        params: {
          'category_id': this.category_id,
          'first_category_id': this.form.get('id').value,
          'project_id': this.form.root.get('project_id').value,
          'category_type': this.form.root.get('user_role_level').value,
        },
        observe: 'response'
      }).subscribe(res => {
        this.message.remove(id);
        if (res.body && res.body['code'] === -1) {
          this.msg.error(res.body['msg']);
        } else if (res.body['code'] === 0) {
          this.downloadFile('物件导入模块', res.body['data']);
        }
      }, err => {
        this.message.remove(id);
        this.message.success(err);
      });
    }
  }

  downloadFile (filename, url) {
    const eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    eleLink.href = url;
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  }


  ngOnDestroy() {
    this.field.fieldGroup.map((item, index) => {
      super.remove(index);
    });
    this.onDestroy$.next();
  }

  uploadChange($event): void {
    if ($event.file && $event.file.status === 'done') {
      const MessageId = this.message.loading('文件上传成功,正在导入物件信息,请稍后..', { nzDuration: 0 }).messageId;
      if ($event.file.originFileObj.file_id) {
        this.http.get('/web/demand/upload-template', { params: {
          file_id: $event.file.originFileObj.file_id,
          category_id: this.category_id,
          project_id: this.form.root.get('project_id').value,
          category_type: this.form.root.get('user_role_level').value,
        }}).subscribe(res => {
          this.message.remove(MessageId);
          if (res['code'] === 0) {
            if (res['data'] && res['data'].length > 0 ) {
              setTimeout(() => {
                this.msg.success('成功导入' + res['data'].length + '个物件!');
              }, 100);
            } else {
              this.msg.success('成功导入物件!');
            }
            res['data'].map(item => {
              const index = this.model && this.model.length ? this.model.length : 0;
              super.add(index , item);
            });
          } else {
            this.msg.error(res['msg']);
          }
        }, err => {
          this.message.remove(MessageId);
          this.msg.error('模板错误，请重新下载模板，或联系WBP助手');
        });
      }
    }
  }

  uploadimgChange ({file, fileList, type}) {
    if (file.status === 'done') {
      console.log(file);
      const index = this.model && this.model.length ? this.model.length : 0;
      const filename = file.name.substring(0, file.name.indexOf('.'));
      const model = Object.assign({}, {
        category_id: this.category_id,
        thing_name: file.name.substring(0, file.name.indexOf('.')),
        thumb_attachment_id: [{
          id:  file.originFileObj.file_id,
          file_url: 'http://' + file.response.Location
        }],
      });

      if (this.model.some(item => item.thing_name === filename)) {
        this.model.forEach((e, i) => {
          if (e.thing_name === filename) {
            let model = Object.assign({}, e, {
              thumb_attachment_id: [{
                id:  file.originFileObj.file_id,
                file_url: 'http://' + file.response.Location
              }],
            });

            super.remove(i);
            super.add(i, model);
          }
        });
      } else {
        super.add(index, model);
      }
    }
  }


  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJPEG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isGIF = file.type === 'image/gif';
      const isJPG = file.type === 'image/jpg';
      const isSVG = file.type === 'image/svg';

      if (!(isJPG || isPNG || isJPEG || isGIF || isSVG)) {
        this.msg.error('只能上传jpg, jpeg, png, gif, svg等图片格式!');
        observer.complete();
        return;
      }

      observer.next(isJPG || isPNG || isJPEG || isGIF || isSVG);
      observer.complete();
    });
  }

  // customBigReq = (item: UploadXHRArgs) => {
  //   const id = this.message.loading('正在上传附件..', { nzDuration: 0 }).messageId;
  //   return this.uploadService.uploadBig(item, 1800, data => {
  //     this.message.remove(id);
  //     this.fileMessageId = this.message.loading('文件上传成功,正在导入物件信息,请稍后..', { nzDuration: 0 }).messageId;
  //   });
  // }

  customBigImgReq = (item: UploadXHRArgs) => {
    const id = this.message.loading('正在上传缩略图..', { nzDuration: 0 }).messageId;
    return this.uploadService.uploadBig(item, 1800, data => {
      this.message.remove(id);
      this.message.success('缩略图上传成功');
    });
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
}
