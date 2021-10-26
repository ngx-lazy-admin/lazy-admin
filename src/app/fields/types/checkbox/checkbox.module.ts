import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { CheckboxField } from './checkbox.component'

@NgModule({
  declarations: [CheckboxField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-checkbox',
          component: CheckboxField,
        }
      ],
    }),
  ],
})

export class CheckboxFieldModule {}
