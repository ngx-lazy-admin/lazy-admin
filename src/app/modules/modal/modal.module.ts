import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FormlyModule } from '@ngx-formly/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { IconsProviderModule } from '../icons-provider.module';
import { ModalContent } from './modal-content.component';
import { FieldTypeModule } from 'src/app/modules/fields/antd';

// import { AntFieldTypeModule } from 'src/app/modules/antd';

// import { CustomFieldModule } from 'src/app/modules/fields/custom';
import { FormFieldModule } from 'src/app/modules/fields/wrappers/form';
import { CustomFieldModule } from 'src/app/modules/fields/custom-type.module';

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
    // AntFieldTypeModule,
    CustomFieldModule,
    FormFieldModule,
  ],
  exports: [
    ModalContent,
  ]
})
export class ModalsModule { }
