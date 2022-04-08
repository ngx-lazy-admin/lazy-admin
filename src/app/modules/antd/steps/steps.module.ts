import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { StepsField } from './steps.component';
import { NzStepsItemComponent } from './steps-item.component';

@NgModule({
  declarations: [ 
    StepsField,
    NzStepsItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzStepsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'steps',
          component: StepsField,
        },
        {
          name: 'nz-steps',
          component: StepsField,
        }
      ],
    }),
  ],
})
export class StepsFieldModule {}