import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular cdk
import { OverlayModule } from '@angular/cdk/overlay';

// ng-zorro
import { IconsProviderModule } from '../modules/icons-provider.module';
import { NgZorroAntdModule } from '../modules/ng-zorro-antd.modules'

import { LayoutBasicComponent } from './basic/basic.component';
import { LayoutBlankComponent } from './blank/blank.component';
import { LayoutHeaderComponent } from './basic/header/header.component';
import { LayoutSearchComponent } from './basic/search/search.component';
import { LayoutSiderComponent } from './basic/sider/sider.component';
import { LayoutUserComponent } from './basic/user/user.component';
import { LayoutMenuComponent } from './basic/menu/menu.component';
import { LayoutFooterBarComponent } from './basic/footer-bar/footer-bar.component';
import { LayoutHeaderTabsetComponent } from './basic/header-tabset/header-tabset.component';
import { SettingDrawerComponent } from './basic/setting/setting.component';
import { SettingDrawerItemComponent } from './basic/setting/setting-item.component';
import { SearchItemComponent } from './basic/search/search-item/search-item.component';
 
 
@NgModule({
  declarations: [
    LayoutBasicComponent,
    LayoutBlankComponent,

    LayoutHeaderComponent,
    LayoutSearchComponent,
    LayoutSiderComponent,
    LayoutUserComponent,
    LayoutMenuComponent,
    LayoutFooterBarComponent,
    LayoutHeaderTabsetComponent,

    SearchItemComponent,

    SettingDrawerComponent,
    SettingDrawerItemComponent
  ],
  exports: [],
  imports: [
    BidiModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    
    IconsProviderModule,
    NgZorroAntdModule
  ]
})
export class LayoutModule {}