import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { StepsField } from './steps.component';

@NgModule({
  declarations: [ StepsField ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzStepsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'description',
          component: StepsField,
        },
        {
          name: 'nz-description',
          component: StepsField,
        }
      ],
    }),
  ],
})
export class StepsFieldModule {}