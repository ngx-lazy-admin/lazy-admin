import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';

import { GroupField } from './group.component'

@NgModule({
  declarations: [
    GroupField
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzDescriptionsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'group',
          component: GroupField,
        },
      ],
    }),
  ],
})
export class GroupFieldModule {}