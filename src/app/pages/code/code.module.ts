import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CodeRoutingModule } from './code-routing.module';
import { CodeComponent } from './code.component';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormlyModule } from '@ngx-formly/core';
import { InputField } from '../../fields/types/input/input.component';


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
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    FormlyModule.forRoot({
      types: [
        { name: 'nz-input', component: InputField },
      ]
    })
  ]
})
export class CodeModule { }
