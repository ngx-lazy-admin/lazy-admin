import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormlyModule } from '@ngx-formly/core';
import { InputField } from '../../fields/types/input/input.component';

@NgModule({
  declarations: [
    FormComponent,
    InputField
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    FormlyModule.forRoot({
      types: [
        { name: 'nz-input', component: InputField },
      ]
    }),
  ]
})
export class FormModule { }
