
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormWrapper } from './form.wrapper';

@NgModule({
  declarations: [FormWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form',
          component: FormWrapper,
        },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }), 
  ],
})
export class FormFieldModule {}