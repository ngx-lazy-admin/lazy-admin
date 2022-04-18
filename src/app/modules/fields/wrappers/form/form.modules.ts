
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';

import { FormlyModule, FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldValidatorFn } from '@ngx-formly/core/lib/services/formly.config';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { TableWrapper } from './table.wrapper';
import { FixedWidthPipe } from './fixedwidth.pipe';
import { FormWrapper } from './form.wrapper';
import { InlineWrapper } from './inline.wrapper';

export function minValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.templateOptions?.min}`;
}

export function maxValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.templateOptions?.max}`;
}

export function IpValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? {} : { 'ip': true };
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
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzToolTipModule,
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
        }
      ],
      validators: [
        // { name: 'ip', validation: IpValidator },
      ],
      validationMessages: [
        { name: 'ip', message: IpValidatorMessage },
        { name: 'required', message: 'This field is required' },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }), 
  ],
  exports: [
    FixedWidthPipe
  ],
})
export class FormFieldModule {}