import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FormlyModule } from '@ngx-formly/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { IconsProviderModule } from '../../modules/icons-provider.module';
import { ModalContent } from './modal-content.component';
import { FieldTypeModule } from 'app/fields/types';
import { CustomFieldModule } from 'app/fields/custom';
import { FormFieldModule } from 'app/fields/wrappers/form';

@NgModule({
  declarations: [
    ModalContent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NzButtonModule,
    NzModalModule,
    DragDropModule,
    IconsProviderModule,

    FormlyModule,
    FieldTypeModule,
    CustomFieldModule,
    FormFieldModule,
  ],
  exports: [
    ModalContent,
  ]
})
export class ModalsModule { }
