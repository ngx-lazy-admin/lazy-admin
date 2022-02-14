import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { DatePickerField } from './date-picker.component';

@NgModule({
  declarations: [
    DatePickerField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date-picker',
          component: DatePickerField,
        },
        {
          name: 'nz-date-picker',
          component: DatePickerField,
        }
      ],
    }),
  ],
})

export class DatePickerFieldModule {}
