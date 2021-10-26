import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { CheckboxGroupField } from './checkbox-group.component'

@NgModule({
  declarations: [CheckboxGroupField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-checkbox-group',
          component: CheckboxGroupField,
        }
      ],
    }),
  ],
})

export class CheckboxGroupFieldModule {}
