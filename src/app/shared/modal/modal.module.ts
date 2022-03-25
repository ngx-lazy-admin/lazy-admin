import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { ModalComponent } from './modal.component';
import { IconsProviderModule } from '../../modules/icons-provider.module';
// import { FieldTypeModule } from '../../fields/types';
import { NzModalCustomComponent } from './modal-form.component';
import { ModalService } from './modal.service';
import { FieldTypeModule } from 'src/app/fields/types';

@NgModule({
  declarations: [
    ModalComponent,
    NzModalCustomComponent,
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
    FormlyModule.forRoot(),
    FieldTypeModule,
  ],
  exports: [
    ModalComponent,
  ]
})
export class ModalsModule { }
