import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { TagField } from './tag.component';
import { TagGroupField } from './tag-group.component';
import { NzTagCheckboxGroupComponent } from './tag-checkbox-group.component';
import { NzTagCheckboxComponent } from './tag-checkbox.component';
import { TagListField } from './tag-list.component';

@NgModule({
  declarations: [
    TagField,
    TagListField,
    NzTagCheckboxComponent,
    TagGroupField,
    NzTagCheckboxGroupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzTagModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tag',
          component: TagField,
        },
        {
          name: 'nz-tag',
          component: TagField,
        },
        {
          name: 'tag-check-group',
          component: TagGroupField,
        },
        {
          name: 'nz-tag-check-group',
          component: TagGroupField,
        },
        {
          name: 'nz-tag-list',
          component: TagListField
        },
        {
          name: 'tag-list',
          component: TagListField
        },
      ],
    }),
  ],
})

export class TagFieldModule {}
