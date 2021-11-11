import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { Observable, Observer } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'div[avatar-upload-field]',
  templateUrl: './avatar-uploader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzAvatarUploaderComponent extends FieldArrayType implements OnInit, OnDestroy {
  loading = false;
  
  avatarUrl: string = '';

  get objtype () {
    return this.to['objtype'] ? this.to['objtype'] : '1800';
  }

  onDestroy$ = new Subject<void>();

  constructor (
    builder: FormlyFormBuilder,
    private msg: NzMessageService,
    private uploadService: UploadService,
    public cos: CosService
  ) {
    super(builder);
  }

  fileList?: any[] | Observable<any[]>;

  showUploadList = {
    showPreviewIcon: false,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: false
  };

  ngOnInit () {
    if (this.model[this.key] && this.model[this.key].length > 0 ) {
      this.fileList = this.model[this.key];
      this.avatarUrl = this.fileList[0].file_url;
    }
  }

  deleteImg () {
    this.fileList = [];
    this.avatarUrl = '';
    this.formControl.patchValue(null);
    this.msg.success('删除成功!');
  }

  click ($event) {
    $event.stopPropagation();
  }

  // 上传前的判断
  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/bmp' || file.type === 'image/jpg');
      if (!isJPG) {
        this.msg.error('只能上传图片格式：jpg、png、bmp、jpeg、JPG、PNG,BMP、JPEG等格式');
        observer.complete();
        return;
      }

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.msg.error('图像必须小于10MB!');
        observer.complete();
        return;
      }
      observer.next(true);
      observer.complete();
    });
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange({ file, fileList }): void {
    if (file.status === 'uploading') {
      this.fileList = [file];
      this.loading = true;
    }
    if (file.status === 'done') {
      const value = [{
        id: file.originFileObj.file_id,
        file_url: 'http://' + file.response.Location
      }];

      this.formControl.patchValue(value);
      this.loading = false;
      this.avatarUrl = file.thumbUrl;
    }

    if (fileList.length === 0) {
      this.formControl.setValue(null);
    }
  }

  customBigReq = (item: UploadXHRArgs) => {
    const id = this.msg.loading('正在上传图片...', { nzDuration: 0 }).messageId;

    return this.uploadService.uploadBig(item, this.objtype, data => {
      this.msg.remove(id);
      this.msg.success('图片上传成功');
    });
  }

  ngOnDestroy() {
    // 组件销毁时, 删除循环的列表
    if (this.field.fieldGroup && this.field.fieldGroup.length > 0) {
      this.field.fieldGroup.map((item, index) => {
        super.remove(index);
      });
    }

    if (this.onDestroy$) {
      this.onDestroy$.next();
    }
  }
}
