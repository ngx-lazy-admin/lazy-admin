import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { IconsProviderModule } from '../../modules/icons-provider.module';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { FormFieldModule } from 'src/app/modules/wrappers/form';


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
    FormlyModule.forRoot(),
    // FieldTypeModule,
    FormFieldModule,
  ]
})
export class CodeModule { }
