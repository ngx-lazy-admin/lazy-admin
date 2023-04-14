
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';

import { FormlyModule, FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzListModule } from 'ng-zorro-antd/list';

import { TableWrapper } from './table.wrapper';
import { FixedWidthPipe } from './fixedwidth.pipe';
import { FormWrapper } from './form.wrapper';
import { InlineWrapper } from './inline.wrapper';
import { ListItemWrapper } from './list-item.wrapper';

import { validators, validationMessages } from '../../validation/validation'

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
        ...validators
      ],
      validationMessages: [
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