import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
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
          name: 'nz-input-number',
          component: InputNumberField,
        }
      ],
    }),
  ],
})
export class InputNumberFieldModule {}