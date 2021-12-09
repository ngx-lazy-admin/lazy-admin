import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';

import { CardField } from './card.component'
import { CardTabsField } from './card-tab.component';

@NgModule({
  declarations: [
    CardField,
    CardTabsField,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzDescriptionsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'card',
          component: CardField,
        },
        {
          name: 'nz-card',
          component: CardField,
        },
        {
          name: 'nz-card-tabs',
          component: CardTabsField,
        }
      ],
    }),
  ],
})
export class CardFieldModule {}