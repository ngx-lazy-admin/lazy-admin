import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { AntvAreaField } from './area.component';
import { AntvAreaItem } from './area-item.component';

@NgModule({
  declarations: [
    AntvAreaField,
    AntvAreaItem,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzAlertModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'antv-area',
          component: AntvAreaField,
        },
      ],
    }),
  ],
})
export class AntvAreaFieldModule {}