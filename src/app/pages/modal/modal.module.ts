import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';



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
