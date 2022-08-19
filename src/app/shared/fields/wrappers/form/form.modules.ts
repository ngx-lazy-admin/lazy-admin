
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';

import { FormlyModule, FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldValidatorFn } from '@ngx-formly/core/lib/services/formly.config';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzListModule } from 'ng-zorro-antd/list';

import { TableWrapper } from './table.wrapper';
import { FixedWidthPipe } from './fixedwidth.pipe';
import { FormWrapper } from './form.wrapper';
import { InlineWrapper } from './inline.wrapper';
import { ListItemWrapper } from './list-item.wrapper';

import { validators, validationMessages } from '../../validation/validation'



export function minValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.templateOptions?.min}`;
}

export function maxValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.templateOptions?.max}`;
}

export function IpValidator(control: AbstractControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? {} : { ip: true };
}

export function requireValidator(control: AbstractControl): ValidationErrors {
  return control.value ? { } : { require: true };
}

export function IpValidatorMessage(err: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" is not a valid IP Address`;
}

// https://angular.cn/guide/form-validation#defining-custom-validators
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@NgModule({
  declarations: [
    FormWrapper,
    InlineWrapper,
    TableWrapper,
    FixedWidthPipe,
    ListItemWrapper,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzToolTipModule,
    NzListModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form',
          component: FormWrapper,
        },
        {
          name: 'inline',
          component: InlineWrapper,
        },
        {
          name: 'table',
          component: TableWrapper
        },
        {
          name: 'list-item',
          component: ListItemWrapper
        }
      ],
      validators: [
        // { name: 'ip', validation: IpValidator },
        // { name: 'require', validation: requireValidator},
        ...validators
      ],
      validationMessages: [
        { name: 'ip', message: IpValidatorMessage },
        { name: 'required', message: 'This field is required' },
        { name: 'require', message: 'This field is require' },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        ...validationMessages
      ],
    }), 
  ],
  exports: [
    FixedWidthPipe,
    NzListModule
  ],
})
export class FormFieldModule {}