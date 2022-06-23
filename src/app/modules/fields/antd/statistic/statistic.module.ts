import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, PercentPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { FormlyModule } from '@ngx-formly/core';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import { DynamicPipe } from 'src/app/pipes/dynamic.pipe';
import { CountdownField } from './countdown.component';
import { StatisticField } from './statistic.component';

@NgModule({
  declarations: [
    StatisticField,
    CountdownField,
    DynamicPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortalModule,
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
        {
          name: 'countdown',
          component: CountdownField,
        },
      ],
    }),
  ],
  providers: [
    // list all pipes you would like to use
    PercentPipe,
    DecimalPipe
  ],
})

export class StatisticFieldModule {}
