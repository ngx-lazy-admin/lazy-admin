import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';


@NgModule({
  declarations: [
    CodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CodeRoutingModule,
    NzCodeEditorModule
  ]
})
export class CodeModule { }
