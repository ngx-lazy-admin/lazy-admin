import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';

import { CardField } from './card.component'
import { CardTabsField } from './card-tab.component';
import { CardSmallField } from './card-small.component';
import { IconsProviderModule } from 'src/app/modules/icons-provider.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule} from 'ng-zorro-antd/tabs';
import { SearchCardField } from './search-card.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PortalModule } from '@angular/cdk/portal';
import { CardMetaField } from './card-meta.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';


@NgModule({
  declarations: [
    CardField,
    CardTabsField,
    CardSmallField,
    SearchCardField,
    CardMetaField,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzDescriptionsModule,
    IconsProviderModule,
    NzToolTipModule,
    NzButtonModule,
    NzTabsModule,
    NzAvatarModule,
    PortalModule,
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
          name: 'nz-card-meta',
          component: CardMetaField,
        },
        {
          name: 'card-meta',
          component: CardMetaField,
        },
        {
          name: 'card-small',
          component: CardSmallField,
        },

        {
          name: 'card-tabs',
          component: CardTabsField,
        },
        {
          name: 'nz-card-tabs',
          component: CardTabsField,
        },
        {
          name: 'search-card',
          component: SearchCardField
        }
      ],
    }),
  ],
})
export class CardFieldModule {}