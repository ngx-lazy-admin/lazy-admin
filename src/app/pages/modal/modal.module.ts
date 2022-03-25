import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { ModalsModule } from 'src/app/shared/modal/modal.module'
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ModalsModule,
    DragDropModule,
    NzButtonModule
  ]
})
export class ModalModule { }
