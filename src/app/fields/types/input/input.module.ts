import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { InputField } from './input.component';
import { TextareaField } from './textarea.component';
import { PasswordField } from './password.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

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