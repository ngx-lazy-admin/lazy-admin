import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { IconsProviderModule } from '../../modules/icons-provider.module';
import { NgZorroAntdModule } from '../../modules/ng-zorro-antd.modules';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FieldTypeModule } from '../../fields/types';
import { FormFieldModule } from '../../fields/wrappers/form';
import { CustomFieldModule } from '../../fields/custom'
import { AntvFieldModule } from '../../fields/custom/antv'



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
    
    IconsProviderModule,
    NgZorroAntdModule,
    FormlyModule.forRoot(),
    FieldTypeModule,
    FormFieldModule,
    CustomFieldModule,
    AntvFieldModule
  ]
})
export class FormModule { }
