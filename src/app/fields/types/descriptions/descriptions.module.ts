import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';

import { DescriptionsField } from './descriptions.component';

@NgModule({
  declarations: [DescriptionsField],
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
        }
      ],
    }),
  ],
})
export class DescriptionFieldModule {}