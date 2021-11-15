import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { FormlyModule } from '@ngx-formly/core';
import { TimePickerField } from './time-picker.component';

@NgModule({
  declarations: [TimePickerField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTimePickerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-time-picker',
          component: TimePickerField,
        },
      ],
    }),
  ],
})
export class TimePickerFieldModule {}
