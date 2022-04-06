import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ButtonField } from './button.component';
import { ButtonGroupField } from './button-group.component';


@NgModule({
  declarations: [
    ButtonField,
    ButtonGroupField,
  ],
  imports: [
    CommonModule,
    NzPopconfirmModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzDividerModule,
    NzIconModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'button',
          component: ButtonField,
        },
        {
          name: 'nz-button',
          component: ButtonField,
        },
        {
          name: 'button-group',
          component: ButtonGroupField
        },
        {
          name: 'nz-button-group',
          component: ButtonGroupField
        }
      ],
    }),
  ],
})
export class ButtonFieldModule {}