import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { ModalsModule } from '../../modules/modal/modal.module';
import { NgZorroAntdModule } from '../../modules/ng-zorro-antd.modules';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ModalsModule,
    NgZorroAntdModule,
    DragDropModule
  ]
})
export class ModalModule { }
