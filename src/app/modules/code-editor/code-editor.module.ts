import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FormlyModule } from '@ngx-formly/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor'

import { IconsProviderModule } from '../icons-provider.module';
import { CodeEditorContent } from './code-editor-content.component';

import { FieldTypeModule } from 'src/app/modules/fields/antd';
import { FormFieldModule } from 'src/app/modules/fields/wrappers/form';
import { CustomFieldModule } from 'src/app/modules/fields/custom-type.module';

@NgModule({
  declarations: [
    CodeEditorContent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,

    NzButtonModule,
    NzModalModule,
    NzTabsModule,
    NzCodeEditorModule,
    IconsProviderModule,

    FormlyModule,
    FieldTypeModule,
    // AntFieldTypeModule,
    CustomFieldModule,
    FormFieldModule,
  ],
  exports: [
    CodeEditorContent,
  ]
})
export class CodeEditorModule { }
