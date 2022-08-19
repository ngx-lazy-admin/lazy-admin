import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal'
import { FormlyModule } from '@ngx-formly/core';

import { NzResultModule } from 'ng-zorro-antd/result';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { FieldTypeModule } from 'src/app/shared/fields/antd';
import { FormFieldModule } from 'src/app/shared/fields/wrappers/form';
import { CustomFieldModule } from 'src/app/shared/fields/custom-type.module';
import { PipesModule } from 'src/app/pipes';
import { CustomModule } from 'src/app/shared/custom.modules';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [

    FormRoutingModule,
    CustomModule,

    PipesModule,

    NzAffixModule,
    NzModalModule,
    NzResultModule,
    NzDrawerModule,
    NzCodeEditorModule,
    NzPageHeaderModule,
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
