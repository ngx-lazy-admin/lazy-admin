import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ng-zorro
import { NgZorroAntdModule } from './ng-zorro-antd.modules';

import { TabsComponent } from './tabs/tabs.component';
import { LayoutBasicComponent } from './basic/basic.component';
import { LayoutBlankComponent } from './blank/blank.component';

import { LayoutHeaderComponent } from './basic/header/header.component';
import { LayoutHeaderTabsetComponent } from './basic/header-tabset/header-tabset.component';
import { LayoutMenuComponent } from './basic/menu/menu.component';

import { LayoutService } from './layout.service';
import { MenuService } from './menu.service';
import { FullScreenService } from './full-screen.service';

@NgModule({
  declarations: [
    LayoutBasicComponent,
    LayoutBlankComponent,
    LayoutHeaderComponent,
    LayoutMenuComponent,
    TabsComponent,
    LayoutHeaderTabsetComponent,
  ],
  exports: [
    
  ],
  imports: [
    BidiModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    NgZorroAntdModule
  ],
  providers: [
    LayoutService,
    MenuService,
    FullScreenService
  ]
})
export class LayoutModule {}