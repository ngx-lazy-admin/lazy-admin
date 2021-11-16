import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { TagField } from './tag.component';
import { TagGroupField } from './tag-group.component';
import { TagWrapperField } from './tag-wrapper.component'

@NgModule({
  declarations: [
    TagField,
    TagGroupField,
    TagWrapperField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
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
