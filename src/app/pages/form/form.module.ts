import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { IconsProviderModule } from '../../modules/icons-provider.module';
import { NgZorroAntdModule } from '../../modules/ng-zorro-antd.modules';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FieldTypeModule } from '../../fields/types';


@NgModule({
  declarations: [
    FormComponent,
    // InputField
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // FormlyModule.forRoot({
    //   types: [
    //     { name: 'nz-input', component: InputField },
    //   ]
    // }),

    IconsProviderModule,
    NgZorroAntdModule,
    FormlyModule.forRoot(),
    FieldTypeModule,
  ]
})
export class FormModule { }
