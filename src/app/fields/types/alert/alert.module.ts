import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertField } from './alert.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  declarations: [
    AlertField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzAlertModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'alert',
          component: AlertField,
        },
        {
          name: 'nz-alert',
          component: AlertField,
        }
      ],
    }),
  ],
})
export class AlertFieldModule {}