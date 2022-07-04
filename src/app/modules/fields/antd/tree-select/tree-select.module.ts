import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { FormlyModule } from '@ngx-formly/core';
import { TreeSelectField } from './tree-select.component';

@NgModule({
  declarations: [TreeSelectField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTreeSelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tree-select',
          component: TreeSelectField,
        },
        {
          name: 'nz-tree-select',
          component: TreeSelectField,
        },
      ],
    }),
  ],
})
export class TreeSelectFieldModule {}
