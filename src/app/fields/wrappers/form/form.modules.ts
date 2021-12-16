
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormWrapper } from './form.wrapper';
import { InlineWrapper } from './inline.wrapper';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

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
      ],
    }), 
  ],
})
export class FormFieldModule {}