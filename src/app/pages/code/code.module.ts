import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { FormFieldModule } from 'src/app/shared/fields/wrappers/form';
import { ApisModule } from 'src/app/services/api/apis.modules';


@NgModule({
  declarations: [
    CodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApisModule,
    ReactiveFormsModule,
    CodeRoutingModule,
    NzCodeEditorModule,
    NzIconModule,
    FormlyModule.forRoot(),
    // FieldTypeModule,
    FormFieldModule,
  ]
})
export class CodeModule { }
