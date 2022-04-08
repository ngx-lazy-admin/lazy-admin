import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { EchartsField } from './echart.component';

@NgModule({
  declarations: [
    EchartsField
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'echarts',
          component: EchartsField,
        },
      ],
    }),
  ],
})
export class EchartsFieldModule {}
