import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonField } from './button.component'

@NgModule({
  declarations: [ButtonField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'button',
          component: ButtonField,
        },
        {
          name: 'nz-button',
          component: ButtonField,
        }
      ],
    }),
  ],
})
export class ButtonFieldModule {}