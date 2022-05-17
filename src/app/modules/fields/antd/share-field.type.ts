
import { HttpClient } from '@angular/common/http';
import { Directive, ChangeDetectorRef, NgZone, ElementRef, Inject } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { FieldType, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';

import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { FullScreenService } from 'src/app/services/menu/full-screen.service';
import { isObject } from 'src/app/utils/utils';
// import { NzNotificationService } from 'ng-zorro-antd/notification';

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

export const execFunc = (func: string | Function) => typeof(func) == 'string' ? execEval(func) : func

@Directive()
export abstract class ShareFieldType extends FieldType {
  constructor(
    // @Inject(DOCUMENT) public dom: any,
    public cd: ChangeDetectorRef,
    public http: HttpClient,
    public readonly zone: NgZone,
    public message: NzMessageService,
    public config: FormlyConfig,
    // private notification: NzNotificationService,
    public fullScreenService: FullScreenService,
    public elRef: ElementRef,
    public elementRef: ElementRef,
  ) {
    super();
  }
  
  // 通用事件处理
  click (action?: ActionTypeInterface) {
    // this.zone.runOutsideAngular(() => {
    //   try{
    //     const func = typeof(action?.click) == 'string' 
    //       ? execEval(action?.click) : 
    //       (typeof(this.to?.click)=='string' ? execEval(this.to?.click) : null);

    //     func ? func(this.field, this) : null
    //     this.cd.markForCheck();
    //   } catch (err){
    //     console.log(err)
    //   } finally {
    //     console.log('click finally')
    //   }
    // });
    this.runChange(this.field, this, 'click')
  }

  // 通用事件处理
  change (action?: ActionTypeInterface) {
    this.runChange(this.field, this, 'change')
  }

  confirm (action?: ActionTypeInterface) {
    this.runChange(this.field, this, 'confirm')
  }

  close (action?: ActionTypeInterface) {
    this.runChange(this.field, this, 'close')
  }

  cancel (action?: ActionTypeInterface) {
    this.runChange(this.field, this, 'cancel')
  }

  runChange (field: FormlyFieldConfig, _this: this, key: string, $event: Event | null = null) {
    this.zone.runOutsideAngular(() => {
      try{
        if (key && _this.to?.[key]) {
          const func = typeof(_this.to?.[key]) == 'string' ? execEval(_this.to?.[key]) : _this.to?.[key];
          func(field, _this, $event)
        }
      } catch (err){
        console.log(key + ': error', err)
      }
    });
  }

  errorMessage(formControl: AbstractControl ): any {
    // debugger
    const fieldForm = formControl;

    if (fieldForm) {
      for (const error in fieldForm.errors) {
        if (fieldForm.errors.hasOwnProperty(error)) {
          let message = this.config.getValidatorMessage(error);

          if (isObject(fieldForm.errors[error])) {
            if (fieldForm.errors[error].errorPath) {
              return;
            }
  
            if (fieldForm.errors[error].message) {
              message = fieldForm.errors[error].message;
            }
          }
  
          if (this.field.validation?.messages?.[error]) {
            message = this.field.validation.messages[error];
          }
  
          if (this.field.validators?.[error]?.message) {
            message = this.field.validators[error].message;
          }
  
          if (this.field.asyncValidators?.[error]?.message) {
            message = this.field.asyncValidators[error].message;
          }
  
          if (typeof message === 'function') {
            return message(fieldForm.errors[error], this.field);
          }
  
          return message;
        }
      }
  
    }
  }
  
  // 校验 form, 校验存在异步行为, 所以应该用Observe
  verification (form: FormGroup) {
    Object.values(form.controls).forEach(control => {
      if (control.invalid) {
        // this.message.error(this.errorMessage(control))
        const message = this.errorMessage(control)
        if (message) {
          // this.notification.error(
          //   'Notification Title',
          //   message,
          // );
        }

        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  } 
}