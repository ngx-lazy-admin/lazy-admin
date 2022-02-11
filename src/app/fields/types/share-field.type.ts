
import { HttpClient } from '@angular/common/http';
import { Directive, ChangeDetectorRef, NgZone } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

export type clickFn = (field: FormlyFieldConfig, that?: any) => boolean;

export interface ActionTypeInterface {
  text?: string | number | null ;
  value?: NzSafeAny | null;
  icon?: string,
  disabled?: boolean;
  hide?: boolean;
  popconfirmTitle?: string,
  popconfirmPlacement?: string,
  className?: string,
  options?: [],
  click?: clickFn;
  close: clickFn;
  confirm?: clickFn,
  cancel?: clickFn
}

export const execEval = (code: string) => eval('(' + code + ')')

@Directive()
export abstract class ShareFieldType extends FieldType {
  constructor(
    public cd: ChangeDetectorRef,
    private http: HttpClient,
    private readonly zone: NgZone,
    private message: NzMessageService
  ) {
    super();
  }
  
  // 通用事件处理
  click (action?: ActionTypeInterface) {
    this.message.success('click')
    this.zone.runOutsideAngular(() => {
      if (action?.click) {
        action.click(this.field, this)
      } else if (this.to?.click) {
        this.to.click(this.field, this);
      }
    });
  }

  confirm (action?: ActionTypeInterface) {
    this.message.success('confirm')
    this.zone.runOutsideAngular(() => {
      if (action?.confirm) {
        action.confirm(this.field, this)
      } else if (this.to?.confirm) {
        this.to.confirm(this.field, this);
      }
    });
  }

  close (action?: ActionTypeInterface) {
    this.message.success('close')
    this.zone.runOutsideAngular(() => {
      if (action?.close) {
        action.close(this.field, this)
      } else if (this.to?.close) {
        this.to.close(this.field, this);
      }
    });
  }

  cancel (action?: ActionTypeInterface) {
    this.message.success('cancel')
    this.zone.runOutsideAngular(() => {
      if (action?.cancel) {
        action.cancel(this.field, this)
      } else if (this.to?.cancel) {
        this.to.cancel(this.field, this);
      }
    });
  }
}