import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonField } from './button.component'
import { ButtonGroupField } from './button-group.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    ButtonField,
    ButtonGroupField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzDividerModule,
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
          name: 'nz-button-group',
          component: ButtonGroupField
        }
      ],
    }),
  ],
})
export class ButtonFieldModule {}