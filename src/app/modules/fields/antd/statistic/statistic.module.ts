import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, PercentPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { FormlyModule } from '@ngx-formly/core';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { CountdownField } from './countdown.component';
import { StatisticField } from './statistic.component';
import { PipesModule } from 'src/app/pipes';

@NgModule({
  declarations: [
    StatisticField,
    CountdownField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortalModule,
    NzStatisticModule, 
    PipesModule,
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
