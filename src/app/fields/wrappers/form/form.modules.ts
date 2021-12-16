
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormWrapper } from './form.wrapper';
import { InlineWrapper } from './inline.wrapper';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';


export function minValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.templateOptions?.min}`;
}

export function maxValidationMessage(err: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.templateOptions?.max}`;
}

@NgModule({
  declarations: [
    FormWrapper,
    InlineWrapper,
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
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }), 
  ],
})
export class FormFieldModule {}