import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { StatisticField } from './statistic.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@NgModule({
  declarations: [
    StatisticField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzStatisticModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-select',
          component: StatisticField,
        }
      ],
    }),
  ],
})

export class StatisticFieldModule {}
