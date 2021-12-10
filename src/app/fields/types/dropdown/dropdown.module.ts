import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { DropdownField } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzDropDownModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-dropdown',
          component: DropdownField,
        }
      ],
    }),
  ],
})

export class DropdownFieldModule {}
