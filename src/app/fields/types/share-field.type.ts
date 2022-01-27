
import { HttpClient } from '@angular/common/http';
import { Directive, ChangeDetectorRef, NgZone } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Directive()
export abstract class ShareFieldType extends FieldType {
  constructor(
    private cd: ChangeDetectorRef,
    private http: HttpClient,
    private readonly zone: NgZone,
    private message: NzMessageService
  ) {
    super();
  }

  execEval = (code: string) => eval('(' + code + ')')

  // 通用事件处理
  click ($event: Event) {
    this.zone.runOutsideAngular(() => {
      if (this.to.click) {
        this.to.click(this.field, this);
      }
    });
  }

  close ($event: boolean) {
    this.zone.runOutsideAngular(() => {
      if (this.to.close) {
        this.to.close(this.field, this);
      }
    });
  }

  cancel () {
    this.zone.runOutsideAngular(() => {
      if (this.to.close) {
        this.to.cancel(this.field, this);
      }
    });
  }
}