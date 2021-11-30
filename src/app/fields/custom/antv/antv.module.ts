import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { G2Field } from './g2.component';
import { G2FieldItem } from './g2-item.component';

@NgModule({
  declarations: [
    G2Field,
    G2FieldItem
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'g2',
          component: G2Field,
        },
      ],
    }),
  ],
})
export class AntvFieldModule {}
