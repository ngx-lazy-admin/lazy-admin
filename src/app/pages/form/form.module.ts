import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzResultModule } from 'ng-zorro-antd/result';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { IconsProviderModule } from '../../modules/icons-provider.module';

import { FieldTypeModule } from '../../fields/types';
import { FormFieldModule } from '../../fields/wrappers/form';
import { WatermarkPipe } from '../../pipes/watermark.pipe';

@NgModule({
  declarations: [
    FormComponent,
    WatermarkPipe
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NzResultModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzSpinModule,
    FormlyModule.forRoot(),
    FieldTypeModule,
    FormFieldModule,
  ]
})
export class FormModule { }
