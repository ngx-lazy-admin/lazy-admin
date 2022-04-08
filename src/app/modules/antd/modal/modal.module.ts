import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { FormlyModule } from '@ngx-formly/core';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule} from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ModalField } from './modal.component'
import { IconsProviderModule } from 'app/modules/icons-provider.module';

@NgModule({
  declarations: [
    ModalField
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalModule,

    NzAvatarModule,
    NzCardModule,
    NzDescriptionsModule,
    NzToolTipModule,
    NzListModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,

    IconsProviderModule,

    FormlyModule.forChild({
      types: [
        {
          name: 'modal',
          component: ModalField,
        }
      ],
    }),
  ],
})
export class ModalFieldModule {}