import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular cdk
import { OverlayModule } from '@angular/cdk/overlay';

// ng-zorro
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { IconsProviderModule } from './icons-provider.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageModule } from 'ng-zorro-antd/message';

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
    
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzAvatarModule,
    NzBadgeModule,
    NzTabsModule,
    NzPopoverModule,
    OverlayModule,
    NzDropDownModule,
    NzProgressModule,
    NzCheckboxModule,
    NzButtonModule,
    NzBackTopModule,
    NzAlertModule,
    NzPaginationModule,
    NzFormModule,
    NzRadioModule,
    NzDrawerModule,
    NzToolTipModule,
    NzDividerModule,
    NzSwitchModule,
    NzIconModule,
    NzInputNumberModule,
    NzMessageModule,
  ]
})
export class LayoutModule {}