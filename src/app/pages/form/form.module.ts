import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzResultModule } from 'ng-zorro-antd/result';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PortalModule } from '@angular/cdk/portal'

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { IconsProviderModule } from '../../modules/icons-provider.module';

import { FieldTypeModule } from '../../fields/types';
import { FormFieldModule } from '../../fields/wrappers/form';
import { WatermarkPipe } from '../../pipes/watermark.pipe';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { CustomFieldModule } from 'src/app/fields/custom';


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
    NzAffixModule,
    NzModalModule,
    NzResultModule,
    NzDrawerModule,
    NzCodeEditorModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzSpinModule,
    PortalModule,

    FormlyModule.forRoot(),
    FieldTypeModule,
    CustomFieldModule,
    FormFieldModule,
  ]
})
export class FormModule { }
