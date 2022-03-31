import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';

import { BadgeField } from './badge.component';

@NgModule({
  declarations: [
    BadgeField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzBadgeModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'badge',
          component: BadgeField,
        },
        {
          name: 'nz-badge',
          component: BadgeField,
        }
      ],
    }),
  ],
})
export class BadgeFieldModule {}