import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CollapseField } from './collapse.component';

@NgModule({
  declarations: [ CollapseField ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzCollapseModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'collapse',
          component: CollapseField,
        },
        {
          name: 'nz-collapse',
          component: CollapseField,
        }
      ],
    }),
  ],
})
export class CollapseFieldModule {}