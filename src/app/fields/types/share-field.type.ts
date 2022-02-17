
import { HttpClient } from '@angular/common/http';
import { Directive, ChangeDetectorRef, NgZone } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

export type FieldActionFn = (field: FormlyFieldConfig, that?: any) => boolean;

export interface ActionTypeInterface {
  type: NzButtonType,
  text?: string | number | null ;
  value?: NzSafeAny | null;
  icon?: string,
  disabled?: boolean;
  hide?: boolean;
  popconfirmTitle?: string,
  popconfirmPlacement?: string,
  className?: string,
  options?: [],
  size?: NzButtonSize,
  click?: FieldActionFn,
  close: FieldActionFn,
  confirm?: FieldActionFn,
  cancel?: FieldActionFn
}


export const execEval = (code: string) => eval('(' + code + ')')

@Directive()
export abstract class ShareFieldType extends FieldType {
  constructor(
    public cd: ChangeDetectorRef,
    public http: HttpClient,
    public readonly zone: NgZone,
    public message: NzMessageService
  ) {
    super();
  }
  
  // 通用事件处理
  click (action?: ActionTypeInterface) {
    this.message.success('click')
    this.zone.runOutsideAngular(() => {
      try{
        if (action?.click) {
          if (typeof(action?.click)=='string') {
            const func = execEval(action?.click)
            func(this.field, this)
          } else {
            action.click(this.field, this)
          }
  
        } else if (this.to.click ) {
          if (typeof(this.to?.click)=='string') {
            const func = execEval(this.to?.click)
            func(this.field, this)
          } else {
            this.to.click(this.field, this);
          }
        }
      } catch (err){
        console.log(err)
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