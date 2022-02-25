import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { RateField } from './rate.component';

@NgModule({
  declarations: [
    RateField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRateModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'rate',
          component: RateField,
        },
        {
          name: 'nz-rate',
          component: RateField,
        }
      ],
    }),
  ],
})

export class RateFieldModule {}
