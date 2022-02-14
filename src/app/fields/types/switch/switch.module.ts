import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { SwitchField } from './switch.component'


@NgModule({
  declarations: [SwitchField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSwitchModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'switch',
          component: SwitchField,
        },
        {
          name: 'nz-switch',
          component: SwitchField,
        }
      ],
    }),
  ],
})
export class SwitchFieldModule {}