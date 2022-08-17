import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal'

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

import { GraphqlRoutingModule } from './graphql-routing.module';
import { GraphqlComponent } from './graphql.component';

import { NzIconModule } from 'ng-zorro-antd/icon';

// import { ModalsModule } from 'src/app/shared/modal' 
// import { FieldTypeModule } from 'src/app/shared/fields/antd';
// import { FormFieldModule } from 'src/app/shared/fields/wrappers/form';
// import { CustomFieldModule } from 'src/app/shared/fields/custom-type.module';

@NgModule({
  declarations: [
    GraphqlComponent
  ],
  imports: [
    CommonModule,
    GraphqlRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
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
  ]
})
export class GraphqlModule { }
