import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, PercentPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { StatisticField } from './statistic.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { CountdownField } from './countdown.component';
import { DynamicPipe } from 'app/pipes/dynamic.pipe';

@NgModule({
  declarations: [
    StatisticField,
    CountdownField,
    DynamicPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzStatisticModule, 
    FormlyModule.forChild({
      types: [
        {
          name: 'statistic',
          component: StatisticField,
        },
        {
          name: 'nz-statistic',
          component: StatisticField,
        },
      ],
    }),
  ],
  exports: [
    DynamicPipe
  ],
  providers: [
    // list all pipes you would like to use
    PercentPipe,
    DecimalPipe
  ],
})

export class StatisticFieldModule {}
