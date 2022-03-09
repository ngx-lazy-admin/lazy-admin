import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AntvLineField } from './line.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { AntvLineItem } from './line-item.component';

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
          name: 'g2-plot',
          component: AntvLineField,
        },
        {
          name: 'ant-line',
          component: AntvLineField,
        },
      ],
    }),
  ],
})
export class AntvLineFieldModule {}