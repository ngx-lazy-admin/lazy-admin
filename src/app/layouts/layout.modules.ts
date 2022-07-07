import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ng-zorro
import { TabsComponent } from './tabs/tabs.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { IconsProviderModule } from '../modules/icons-provider.module';

import { LayoutBasicComponent } from './basic/basic.component';
import { LayoutBlankComponent } from './blank/blank.component';
import { LayoutHeaderComponent } from './basic/header/header.component';
import { LayoutSearchComponent } from './basic/search/search.component';
import { LayoutSiderComponent } from './basic/sider/sider.component';
import { LayoutUserComponent } from './basic/user/user.component';
import { LayoutMenuComponent } from './basic/menu/menu.component';
import { LayoutFooterBarComponent } from './basic/footer-bar/footer-bar.component';
import { LayoutHeaderTabsetComponent } from './basic/header-tabset/header-tabset.component';
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
    TabsComponent,
    LayoutFooterBarComponent,
    LayoutHeaderTabsetComponent,
    SearchItemComponent
  ],
  exports: [],
  imports: [
    BidiModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    NzBadgeModule,
    NzLayoutModule,
    NzFormModule,
    NzAffixModule,
    NzBackTopModule,
    NzMenuModule,
    NzTabsModule,
    NzAvatarModule,
    NzCardModule,
    NzInputModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDropDownModule,
    NzDrawerModule,
    NzMessageModule,
    IconsProviderModule,
    // NgZorroAntdModule
  ]
})
export class LayoutModule {}