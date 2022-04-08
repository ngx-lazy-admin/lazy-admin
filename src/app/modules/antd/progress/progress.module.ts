import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressField } from './progress.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [
    ProgressField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzProgressModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'progress',
          component: ProgressField,
        },
        {
          name: 'nz-progress',
          component: ProgressField,
        }
      ],
    }),
  ],
})
export class ProgressFieldModule {}