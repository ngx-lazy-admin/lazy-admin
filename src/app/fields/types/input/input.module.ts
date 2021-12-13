import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { InputField } from './input.component';
import { TextareaField } from './textarea.component';

@NgModule({
  declarations: [InputField, TextareaField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: InputField,
        },
        {
          name: 'nz-input',
          component: InputField,
        },
        {
          name: 'textarea',
          component: TextareaField,
        },
        {
          name: 'nz-textarea',
          component: TextareaField
        }
      ],
    }),
  ],
})
export class InputFieldModule {}