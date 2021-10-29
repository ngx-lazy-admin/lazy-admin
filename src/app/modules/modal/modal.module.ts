import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { ModalComponent } from './modal.component';
import { IconsProviderModule } from '../../modules/icons-provider.module';
import { NgZorroAntdModule } from '../../modules/ng-zorro-antd.modules';
import { FieldTypeModule } from '../../fields/types';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzModalModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormlyModule.forRoot(),
    FieldTypeModule
  ],
  exports: [
    ModalComponent,
  ]
})
export class ModalsModule { }
