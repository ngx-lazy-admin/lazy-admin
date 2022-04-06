import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';

import { DescriptionsField } from './descriptions.component';
import { DescriptionsGroupField } from './descriptions-group.component';

@NgModule({
  declarations: [
    DescriptionsField,
    DescriptionsGroupField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzDescriptionsModule,
    NzCardModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'descriptions',
          component: DescriptionsField,
        },
        {
          name: 'nz-descriptions',
          component: DescriptionsField,
        },
        {
          name: 'descriptions-group',
          component: DescriptionsGroupField,
        },
        {
          name: 'nz-descriptions-group',
          component: DescriptionsGroupField,
        }
      ],
    }),
  ],
})
export class DescriptionFieldModule {}