import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';

import { FormlyModule } from '@ngx-formly/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { IconsProviderModule } from '../icons-provider.module';
import { FieldTypeModule } from 'src/app/shared/fields/antd';
import { FormFieldModule } from 'src/app/shared/fields/wrappers/form';
import { CustomFieldModule } from 'src/app/shared/fields/custom-type.module';

import { FormModal } from './form-modal/form-modal.component';
import { SearchModal } from './search-modal/search-modal.component';
import { DispatchService } from './dispatch.service';
import { ModalService } from './modal.service';
import { BlankModal } from './blank-modal/blank-modal.component';

@NgModule({
  providers: [
    DispatchService,
    ModalService
  ],
  declarations: [
    FormModal,
    SearchModal,
    BlankModal
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ScrollingModule,
    NzAutocompleteModule,

    MatListModule,

    NzAlertModule,
    NzIconModule,
    NzModalModule,
    NzListModule,
    NzInputModule,

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
    FormModal,
    SearchModal,
    BlankModal
  ]
})
export class ModalsModule { }
