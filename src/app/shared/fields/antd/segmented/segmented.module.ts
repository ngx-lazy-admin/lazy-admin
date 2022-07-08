import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { SegmentedField } from './segmented.component';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [ 
    SegmentedField,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzSegmentedModule,
    NzAvatarModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'segmented',
          component: SegmentedField,
        },
        {
          name: 'nz-segmented',
          component: SegmentedField,
        }
      ]
    })
  ]
})
export class SegmentedFieldModule {}