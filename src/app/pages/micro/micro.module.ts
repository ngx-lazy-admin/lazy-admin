import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './micro-routing.module';
import { IframeComponent } from './iframe/iframe.component';
import { QiankunComponent } from './qiankun/qiankun.component';
import { WuJieComponent } from './wujie/wujie.component';

import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [IframeComponent, QiankunComponent, WuJieComponent],
  imports: [CommonModule, RoutingModule, NzSpinModule]
})
export class MicroModule {}
