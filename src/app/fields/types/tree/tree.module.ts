import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TreeField } from './tree.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SearchTreeField } from './search-tree.component';

@NgModule({
  declarations: [
    TreeField,
    SearchTreeField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
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
        {
          name: 'search-tree',
          component: SearchTreeField,
        },
        {
          name: 'nz-search-tree',
          component: SearchTreeField,
        },
      ],
    }),
  ],
})
export class TreeFieldModule {}
