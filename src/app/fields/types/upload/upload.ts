// 创建需求 - 上传模块
import { Component, OnDestroy, OnInit, ChangeDetectorRef,  ChangeDetectionStrategy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { MessageService } from '../../../services/message.service';
import { takeUntil, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Observer } from 'rxjs';
import { CosService } from '../../../services/cos.service';


@Component({
  selector: 'app-create-demand-upload-section',
  templateUrl: './create-demand-upload-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
        margin-bottom: 30px;
    }

    :host ::ng-deep .upload-list-inline{
        display: flex;
    }

    :host ::ng-deep .ant-upload-select{
        width: 100px;
    }

    :host ::ng-deep .ant-upload-list{
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 100px);
        flex: 1;
    }

    :host ::ng-deep .ant-upload-list .ant-upload-list-item {
      max-width: 25%;
    }

    :host ::ng-deep .ant-upload-list .ant-upload-list-item .ant-upload-list-item-name {
      padding-right: 8px;
    }

    :host ::ng-deep .ant-upload-disabled .ant-btn {
      color: rgba(0,0,0,.25);
      background-color: #f5f5f5;
      border-color: #d9d9d9;
      text-shadow: none;
      box-shadow: none;
    }

    :host ::ng-deep .ant-upload-disabled .ant-upload-list-item:hover .ant-upload-list-item-info {
      background-color: white;
    }

    :host ::ng-deep .upload-disabled .anticon-close{
      display: none;
    }
    `
  ]
})

export class CreateDemandUploadComponent extends FieldArrayType implements OnDestroy, OnInit {
  constructor(
    builder: FormlyFormBuilder,
    private http: HttpClient,
    private msg: MessageService,
    private cd: ChangeDetectorRef,
    public cos: CosService
  ) {
    super(builder);
  }

  onDestroy$ = new Subject<void>();


  get objtype () {
    return this.to['key'] ? this.to['key'] : '1025'
  }

  fileList?: any[] | Observable<any[]>;

  handleChange({ file, fileList, event}): void {
    if (this.to['nzMultiple'] === false && this.to['nzLimit'] === 1) {
      if (file.status === 'uploading') {
        this.fileList = [file];
      }
      if (file.status === 'done') {
        this.formControl.patchValue(file.originFileObj.file_id);
      }
    } else {
      const data = fileList.filter(file => file.status === 'done' && file.originFileObj).map(file => file.originFileObj.file_id);
      this.formControl.patchValue(data);
    }

    if (fileList.length === 0) {
      this.formControl.setValue(null);
    }

    if (typeof this.to['nzChange'] === 'function' ) {
      this.to.nzChange(fileList, file, event);
    }
    this.cd.markForCheck();
  }


  ngOnInit () {
    if (this.to['options'] instanceof Observable) {
      this.to['options'].subscribe(item => {
        this.fileList = item;
        this.cd.markForCheck();
      });
    } else {
      this.fileList = this.to['options'];
    }

    this.formControl.valueChanges
    .pipe(takeUntil(this.onDestroy$))
    .pipe(filter(item => item))
    .subscribe(item => {
      if (!item) {
        this.fileList = [];
        this.cd.markForCheck();
      }
    });

    this.cd.markForCheck();
  }

  ngOnDestroy() {
    // 组件销毁时, 删除循环的列表
    if (this.field.fieldGroup && this.field.fieldGroup.length > 0) {
      this.field.fieldGroup.map((item, index) => {
        super.remove(index);
      });
    }

    this.onDestroy$.next();
    this.cd.markForCheck();
  }
}
