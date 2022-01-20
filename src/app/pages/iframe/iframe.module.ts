import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRoutingModule } from './iframe-routing.module';
import { IframeComponent } from './iframe.component';
import { ModalsModule } from '../../modules/modal/modal.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { QiankunComponent } from './qiankun/qiankun.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';



@NgModule({
  declarations: [
    IframeComponent,
    QiankunComponent
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ModalsModule,
    DragDropModule,
    NzSpinModule
  ]
})
export class IframeModule { }
