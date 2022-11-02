import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { AlertField } from './alert.component';

@NgModule({
  declarations: [AlertField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzAlertModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'alert',
          component: AlertField
        },
        {
          name: 'nz-alert',
          component: AlertField
        }
      ]
    })
  ]
})
export class AlertFieldModule {}
