
import { HttpClient } from '@angular/common/http';
import { Input, Directive, ChangeDetectorRef } from '@angular/core';
import { FieldType, FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Directive()
export abstract class ShareFieldType extends FieldType {
  constructor(
    private cd: ChangeDetectorRef,
    private http: HttpClient,
    private message: NzMessageService
  ) {
    super();
  }

  // 通用事件处理
  click ($event: Event) {
    if (this.to.click) {
      this.to.click(this.field, this);
    }
  }
}