import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { SliderField } from './slider.component'


@NgModule({
  declarations: [SliderField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSliderModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-slider',
          component: SliderField,
        }
      ],
    }),
  ],
})
export class SliderFieldModule {}