import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { InputNumberField } from './input-number.component'

@NgModule({
  declarations: [InputNumberField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'number',
          component: InputNumberField,
        },
        {
          name: 'input-number',
          component: InputNumberField,
        },
        {
          name: 'nz-input-number',
          component: InputNumberField,
        }
      ],
    }),
  ],
})
export class InputNumberFieldModule {}