
import { HttpClient } from '@angular/common/http';
import { Directive, ChangeDetectorRef, NgZone, ElementRef, Inject } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

import { FieldType, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';

import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { FullScreenService } from 'src/app/services/menu/full-screen.service';
import { isObject } from 'src/app/utils';
import { TemplateService } from '../../template';
import { Router } from '@angular/router';

export type FieldActionFn = (field: FormlyFieldConfig, that?: any) => boolean;

export interface ActionTypeInterface {
  type: NzButtonType,
  text?: string | number | null ;
  value?: NzSafeAny | null;
  icon?: string,
  disabled?: boolean;
  danger?: boolean; 
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
    public cd: ChangeDetectorRef,
    public http: HttpClient,
    public readonly zone: NgZone,
    public message: NzMessageService,
    public config: FormlyConfig,
    public fullScreenService: FullScreenService,
    public elRef: ElementRef,
    public elementRef: ElementRef,
    public template: TemplateService,
    public router: Router
  ) {
    super();
  }
  
  // 通用事件处理
  click (action?: ActionTypeInterface) {
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

  // export declare type FormlyAttributeEvent = (field: FormlyFieldConfig, event?: any) => void;

  runChange (field: FormlyFieldConfig, _this: this, key: string, $event: Event | null = null) {
    this.zone.runOutsideAngular(() => {
      try{
        if (key && _this.props?.[key]) {
          const func = typeof(_this.props?.[key]) == 'string' ? execEval(_this.props?.[key]) : _this.props?.[key];
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
        const message = this.errorMessage(control)
        console.log(message);
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  } 
}