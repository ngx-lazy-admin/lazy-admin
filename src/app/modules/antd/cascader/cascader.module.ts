import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { CascaderField } from './cascader.component'

@NgModule({
  declarations: [CascaderField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCascaderModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cascader',
          component: CascaderField,
        },
        {
          name: 'nz-cascader',
          component: CascaderField,
        }
      ],
    }),
  ],
})
export class CascaderFieldModule {}