import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { ThemeSettingComponent } from './theme-setting.component';
import { ThemeSettingItemComponent } from './theme-setting-item.component';

@NgModule({
  declarations: [
    ThemeSettingItemComponent,
    ThemeSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,

    NzAlertModule,
    NzButtonModule,
    NzDividerModule,
    NzDrawerModule,
    NzIconModule,
    NzInputNumberModule,
    NzSwitchModule,
    NzTabsModule
  ],
  exports: [
    ThemeSettingComponent
  ]
})
export class ThemeSettingModule {}