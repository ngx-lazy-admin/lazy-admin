import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RepeatField } from './repeat.component'

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RepeatField
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ScrollingModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: RepeatField,
        },
      ],
    }),
  ],
})
export class RepeatFieldModule {}