import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { TagField } from './tag.component';
import { TagGroupField } from './tag-group.component';
import { NzTagCheckboxGroupComponent } from './tag-checkbox-group.component';
import { NzTagCheckboxComponent } from './tag-checkbox.component';

@NgModule({
  declarations: [
    TagField,
    NzTagCheckboxComponent,

    TagGroupField,
    NzTagCheckboxGroupComponent,
    // TagWrapperField,

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
        }
      ],
    }),
  ],
})

export class TagFieldModule {}
