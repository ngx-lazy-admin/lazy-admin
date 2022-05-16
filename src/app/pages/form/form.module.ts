import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal'
import { FormlyModule } from '@ngx-formly/core';

import { NzResultModule } from 'ng-zorro-antd/result';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { IconsProviderModule } from '../../modules/icons-provider.module';
import { WatermarkPipe } from '../../pipes/watermark.pipe';
import { ModalsModule } from 'src/app/modules/modal' 
import { FieldTypeModule } from 'src/app/modules/fields/antd';
// import { CustomFieldModule } from 'src/app/modules/fields/custom';
import { FormFieldModule } from 'src/app/modules/fields/wrappers/form';
import { CustomFieldModule } from 'src/app/modules/fields/custom-type.module';

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
    NzAlertModule,
    NzTabsModule,
    // ModalsModule

    FormlyModule,
    FieldTypeModule,
    // AntFieldTypeModule,
    CustomFieldModule,
    FormFieldModule,
  ]
})
export class FormModule { }
