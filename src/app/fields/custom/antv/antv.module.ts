import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { G2Field } from './g2.component';
import { G2FieldItem } from './g2-item.component';
import { G6Field } from './g6.component';
import { G6FieldItem } from './g6-item.component';
import { S2Field } from './s2.component';
import { S2FieldItem } from './s2-item.component';


@NgModule({
  declarations: [
    G2Field,
    G2FieldItem,
    G6Field,
    G6FieldItem,
    S2Field,
    S2FieldItem
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
        {
          name: 'g6',
          component: G6Field,
        },
        {
          name: 's2',
          component: S2Field,
        },
      ],
    }),
  ],
})
export class AntvFieldModule {}
