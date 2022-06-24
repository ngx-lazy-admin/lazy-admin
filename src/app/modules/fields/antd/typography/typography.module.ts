import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { TypographyField } from './typography.component'

@NgModule({
  declarations: [TypographyField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzTypographyModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'typography',
          component: TypographyField,
        },
        {
          name: 'nz-typography',
          component: TypographyField,
        }
      ],
    }),
  ],
})
export class TypographyFieldModule {}