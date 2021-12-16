
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { InlineWrapper } from './inline.wrapper';

@NgModule({
  declarations: [InlineWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [
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