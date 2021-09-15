import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { IconsProviderModule } from './icons-provider.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { LayoutBasicComponent } from './basic/basic.component';
import { LayoutBlankComponent } from './blank/blank.component';

import { LayoutHeaderComponent } from './basic/header/header.component';
import { LayoutSearchComponent } from './basic/search/search.component';
import { LayoutSiderComponent } from './basic/sider/sider.component';
import { LayoutUserComponent } from './basic/user/user.component';
import { LayoutMenuComponent } from './basic/menu/menu.component';

@NgModule({
  declarations: [
    LayoutBasicComponent,
    LayoutBlankComponent,

    LayoutHeaderComponent,
    LayoutSearchComponent,
    LayoutSiderComponent,
    LayoutUserComponent,
    LayoutMenuComponent
  ],
  exports: [],
  imports: [
    BidiModule,
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzPageHeaderModule,
    NzBreadCrumbModule,
    NzInputModule,
    NzAvatarModule,
    NzBadgeModule,
    NzTabsModule
  ]
})
export class LayoutModule {}