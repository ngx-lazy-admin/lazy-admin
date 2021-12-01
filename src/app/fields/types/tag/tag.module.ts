import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { TagField } from './tag.component';
import { TagGroupField } from './tag-group.component';
import { TagWrapperField } from './tag-wrapper.component'
import { NzTagsCheckboxComponent } from './tag-checkbox.component';

@NgModule({
  declarations: [
    TagField,
    TagGroupField,
    TagWrapperField,
    NzTagsCheckboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzTagModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-tag',
          component: TagField,
        },
        {
          name: 'nz-tag-group',
          component: TagGroupField,
        },
        {
          name: 'nz-tag-wrapper',
          component: TagWrapperField,
        }
      ],
    }),
  ],
})

export class TagFieldModule {}
