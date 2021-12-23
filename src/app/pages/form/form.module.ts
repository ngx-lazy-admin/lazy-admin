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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/api/in-memory-data.service';

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


  ]
})
export class FormModule { }
