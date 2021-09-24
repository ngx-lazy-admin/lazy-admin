import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    NzButtonModule,
    NzModalModule,
    CommonModule,
    ModalRoutingModule,
    DragDropModule
  ]
})
export class ModalModule { }
