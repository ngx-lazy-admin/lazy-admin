import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { FormlyModule } from '@ngx-formly/core';
import { TreeField } from './tree.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';

@NgModule({
  declarations: [
    TreeField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTreeSelectModule,
    NzTreeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tree',
          component: TreeField,
        },
        {
          name: 'nz-tree',
          component: TreeField,
        },
      ],
    }),
  ],
})
export class TreeFieldModule {}
