import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputField } from './input.component'
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [InputField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-input',
          component: InputField,
        }
      ],
    }),
  ],
})
export class InputFieldModule {}