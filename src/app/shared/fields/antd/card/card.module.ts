import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule} from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PortalModule } from '@angular/cdk/portal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFormModule } from 'ng-zorro-antd/form';

import { CardField } from './card.component'
import { CardTabsField } from './card-tab.component';
import { CardSmallField } from './card-small.component';
import { IconsProviderModule } from 'src/app/shared/icons-provider.module';
import { SearchCardField } from './search-card.component';
import { CardMetaField } from './card-meta.component';
import { CodeCardField } from './code-card.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';


@NgModule({
  declarations: [
    CardField,
    CardTabsField,
    CardSmallField,
    SearchCardField,
    CardMetaField,
    CodeCardField,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzDescriptionsModule,
    IconsProviderModule,
    NzToolTipModule,
    NzListModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzTabsModule,
    NzAvatarModule,
    NzFormModule,
    PortalModule,
    NzInputModule,
    NzCodeEditorModule,
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
        },
        {
          name: 'code-card',
          component: CodeCardField
        }
      ],
    }),
  ],
})
export class CardFieldModule {}