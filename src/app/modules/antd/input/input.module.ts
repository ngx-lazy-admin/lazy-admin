import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { InputField } from './input.component';
import { TextareaField } from './textarea.component';
import { PasswordField } from './password.component';


@NgModule({
  declarations: [
    InputField,
    TextareaField,
    PasswordField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzIconModule,
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
        },
        {
          name: 'password',
          component: PasswordField
        },
        {
          name: 'nz-password',
          component: PasswordField
        }
      ],
    }),
  ],
})
export class InputFieldModule {}