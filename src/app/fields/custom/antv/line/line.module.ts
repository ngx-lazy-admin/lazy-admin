import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { AntvLineItem } from './line-item.component';
import { AntvLineField } from './line.component';

@NgModule({
  declarations: [
    AntvLineField,
    AntvLineItem,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzAlertModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'antv-line',
          component: AntvLineField,
        },
      ],
    }),
  ],
})
export class AntvLineFieldModule {}