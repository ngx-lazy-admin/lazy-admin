import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { G2PlotItem } from './g2-plot-item.component';
import { G2PlotField } from './g2-plot.component';

@NgModule({
  declarations: [
    G2PlotField,
    G2PlotItem,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzAlertModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'g2-plot',
          component: G2PlotField,
        },
      ],
    }),
  ],
})
export class G2PlotFieldModule {}