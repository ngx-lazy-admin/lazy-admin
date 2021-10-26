import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { FormlyModule } from '@ngx-formly/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormControl } from '@angular/forms';

import { CheckboxWrapperField } from './checkbox-wrapper.component'

@NgModule({
  declarations: [CheckboxWrapperField],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-checkbox-wrapper',
          component: CheckboxWrapperField,
        }
      ],
    }),
  ],
})

export class CheckboxWrapperFieldModule {}
