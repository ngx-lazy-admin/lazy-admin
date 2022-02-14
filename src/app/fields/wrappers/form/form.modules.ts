
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormWrapper } from './form.wrapper';
import { InlineWrapper } from './inline.wrapper';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import { FieldValidatorFn } from '@ngx-formly/core/lib/services/formly.config';
import { TableWrapper } from './table.wrapper';
import { FixedWidthPipe } from './fixedwidth.pipe';

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