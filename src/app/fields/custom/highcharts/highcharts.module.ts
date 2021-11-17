import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { HighChartField } from './highcharts.component';

@NgModule({
  declarations: [
    HighChartField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'highcharts',
          component: HighChartField,
        },
      ],
    }),
  ],
})
export class HighchartsFieldModule {}
