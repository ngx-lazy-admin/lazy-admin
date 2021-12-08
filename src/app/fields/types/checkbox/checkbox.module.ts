import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { CheckboxField } from './checkbox.component';
import { CheckboxGroupField } from '../checkbox/checkbox-group.component';
import { CheckboxWrapperField } from '../checkbox/checkbox-wrapper.component'
import { NzCheckboxWrapperItemComponent } from '../checkbox/checkbox-wrapper-item.component'


@NgModule({
  declarations: [
    CheckboxField,
    CheckboxGroupField,
    CheckboxWrapperField,
    NzCheckboxWrapperItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'checkbox',
          component: CheckboxField,
        },
        {
          name: 'nz-checkbox',
          component: CheckboxField,
        },
        {
          name: 'checkbox-group',
          component: CheckboxGroupField,
        },
        {
          name: 'nz-checkbox-group',
          component: CheckboxGroupField,
        },
        {
          name: 'checkbox-wrapper',
          component: CheckboxWrapperField,
        },
        {
          name: 'nz-checkbox-wrapper',
          component: CheckboxWrapperField,
        }
      ],
    }),
  ],
})

export class CheckboxFieldModule {}
