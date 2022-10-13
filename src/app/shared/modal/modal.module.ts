import { NgModule, ModuleWithProviders, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';

import { MatListModule } from '@angular/material/list';

import { FormlyModule } from '@ngx-formly/core';

import { FieldTypeModule } from 'src/app/shared/fields/antd';
import { FormFieldModule } from 'src/app/shared/fields/wrappers/form';
import { CustomFieldModule } from 'src/app/shared/fields/custom-type.module';

import { FormModal } from './form-modal/form-modal.component';
import { SearchModal } from './search-modal/search-modal.component';
import { DispatchService } from './dispatch.service';
import { ModalService } from './modal.service';
import { BlankModal } from './blank-modal/blank-modal.component';
import { ModalTemplateComponent } from './template/template.component';

import { NgZorroAntdModule } from './ng-zorro-antd.modules';
import { ModalTitleComponent } from './modal-title.component';

@NgModule({
  providers: [
    DispatchService,
    ModalService
  ],
  declarations: [
    FormModal,
    SearchModal,
    BlankModal,
    ModalTitleComponent,
    ModalTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ScrollingModule,
    DragDropModule,
    MatListModule,
    NgZorroAntdModule,
    PortalModule,

    FormlyModule,
    FieldTypeModule,
    CustomFieldModule,
    FormFieldModule,
  ],
  exports: [
    FormModal,
    SearchModal,
    BlankModal,
    ModalTitleComponent,
    ModalTemplateComponent,
  ],
  entryComponents: [
    ModalTemplateComponent
  ]
})
export class ModalsModule { }
