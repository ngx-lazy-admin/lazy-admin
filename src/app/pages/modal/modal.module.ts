import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FormlyModule } from '@ngx-formly/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';
import { ModalsModule } from 'src/app/shared/modal';
import { FieldTypeModule } from 'src/app/shared/fields/antd';
import { FormFieldModule } from 'src/app/shared/fields/wrappers/form';
import { CustomFieldModule } from 'src/app/shared/fields/custom-type.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ThemeSettingModule } from 'src/app/shared/theme-setting';

import { ThemeModule } from 'src/app/shared/theme';
import { ModalItemComponent } from './components/modal-item.component';
// import { ModalItemComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    ModalItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalRoutingModule,
    ModalsModule,
    DragDropModule,
    NzButtonModule,
    NzAffixModule,
    NzModalModule,
    NzResultModule,
    NzDrawerModule,
    NzCodeEditorModule,
    NzPageHeaderModule,
    NzAlertModule,
    NzTabsModule,
    PortalModule,
    ScrollingModule,
    // ModalsModule

    FormlyModule,
    FieldTypeModule,
    // AntFieldTypeModule,
    CustomFieldModule,
    FormFieldModule,
    ThemeSettingModule,
    ThemeModule
  ]
})
export class ModalModule {}
