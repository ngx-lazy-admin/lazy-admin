import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { IconsProviderModule } from '../../modules/icons-provider.module';
import { NgZorroAntdModule } from '../../modules/ng-zorro-antd.modules';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';

import { FieldTypeModule } from '../../fields/types';
import { FormFieldModule } from '../../fields/wrappers/form';
import { CustomFieldModule } from '../../fields/custom';


@NgModule({
  declarations: [
    CodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CodeRoutingModule,
    NzCodeEditorModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormlyModule.forRoot(),
    FieldTypeModule,
    FormFieldModule,
    CustomFieldModule,
  ]
})
export class CodeModule { }
