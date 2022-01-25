import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelectField } from './select.component';

@NgModule({
  declarations: [
    SelectField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'select',
          component: SelectField,
        },
        {
          name: 'nz-select',
          component: SelectField,
        }
      ],
    }),
  ],
})

export class SelectFieldModule {}
