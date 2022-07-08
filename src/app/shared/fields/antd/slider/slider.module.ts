import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { SliderRangeField } from './slider-range.component';
import { SliderField } from './slider.component';

import { NzSliderRangeItemComponent } from './slider-range-item.component';
import { NzSliderRangeComponent } from './slider-item.component';

@NgModule({
  declarations: [
    SliderField,
    SliderRangeField,
    NzSliderRangeComponent,
    NzSliderRangeItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSliderModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'slider',
          component: SliderField,
        },
        {
          name: 'nz-slider',
          component: SliderField,
        },
        {
          name: 'slider-range',
          component: SliderRangeField,
        },
        {
          name: 'nz-slider-range',
          component: SliderRangeField,
        }
      ],
    }),
  ],
})
export class SliderFieldModule {}