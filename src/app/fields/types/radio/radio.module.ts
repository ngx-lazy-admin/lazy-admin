import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { RadioField } from './radio.component';
import { RadioGroupField } from './radio-group.component';
import { RadioWrapperField } from './radio-wrapper.component'
import { NzRadioWrapperItemComponent } from './radio-wrapper-item.component'


@NgModule({
  declarations: [
    RadioField,
    RadioGroupField,
    RadioWrapperField,
    NzRadioWrapperItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRadioModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-radio',
          component: RadioField,
        },
        {
          name: 'nz-radio-group',
          component: RadioGroupField,
        },
        {
          name: 'nz-radio-wrapper',
          component: RadioWrapperField,
        }
      ],
    }),
  ],
})

export class RadioFieldModule {}
