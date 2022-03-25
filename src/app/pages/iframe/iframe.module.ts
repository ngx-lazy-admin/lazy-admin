import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRoutingModule } from './iframe-routing.module';
import { IframeComponent } from './iframe/iframe.component';
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
    DragDropModule,
    NzSpinModule
  ]
})
export class IframeModule { }
