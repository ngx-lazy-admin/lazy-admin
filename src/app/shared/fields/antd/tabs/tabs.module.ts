import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { PortalModule } from '@angular/cdk/portal';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { TabsField } from './tabs.component'

@NgModule({
  declarations: [TabsField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PortalModule,
    NzTabsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'tabs',
          component: TabsField,
        },
        {
          name: 'nz-tabs',
          component: TabsField,
        }
      ],
    }),
  ],
})
export class TabsFieldModule {}