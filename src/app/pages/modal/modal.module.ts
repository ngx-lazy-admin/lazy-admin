import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { ModalsModule } from '../../modules/modal/modal.module';
import { NgZorroAntdModule } from '../../modules/ng-zorro-antd.modules';


@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ModalRoutingModule,
    ModalsModule,
    NgZorroAntdModule
  ]
})
export class ModalModule { }
