import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { MentionField } from './mention.component'


@NgModule({
  declarations: [MentionField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzMentionModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-mention',
          component: MentionField,
        }
      ],
    }),
  ],
})
export class MentionFieldModule {}