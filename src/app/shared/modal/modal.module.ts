import { NgModule, ModuleWithProviders, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';

import { MatListModule } from '@angular/material/list';

import { FormlyModule } from '@ngx-formly/core';

import { FieldTypeModule } from 'src/app/shared/fields/antd';
import { FormFieldModule } from 'src/app/shared/fields/wrappers/form';
import { CustomFieldModule } from 'src/app/shared/fields/custom-type.module';

import { FormModal } from './form-modal/form-modal.component';
import { SearchModal } from './search-modal/search-modal.component';
import { DispatchService } from './dispatch.service';
import { ModalService } from './modal.service';
import { BlankModal } from './blank-modal/blank-modal.component';
import { ModalTemplateComponent } from './template/template.component';

import { NgZorroAntdModule } from './ng-zorro-antd.modules';

// export function defaultFormlyConfig(config: any): any {
//   return {
//     types: [
//       { name: 'formly-group', component: FormlyGroup },
//       { name: 'formly-template', component: FormlyTemplateType },
//     ]
//   };
// }

@NgModule({
  providers: [
    DispatchService,
    ModalService
  ],
  declarations: [
    FormModal,
    SearchModal,
    BlankModal,
    ModalTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ScrollingModule,
    DragDropModule,
    MatListModule,
    NgZorroAntdModule,
    PortalModule,

    FormlyModule,
    FieldTypeModule,
    // AntFieldTypeModule,
    CustomFieldModule,
    FormFieldModule,
  ],
  exports: [
    FormModal,
    SearchModal,
    BlankModal,
    ModalTemplateComponent
  ],
  entryComponents: [
    ModalTemplateComponent
  ]
})
export class ModalsModule { 
  // static forRoot(config: ConfigOption = {}): ModuleWithProviders<FormlyModule> {
  //   return {
  //     ngModule: FormlyModule,
  //     providers: [
  //       { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
  //       { provide: FORMLY_CONFIG, useValue: config, multi: true },
  //       FormlyConfig,
  //       FormlyFormBuilder,
  //     ],
  //   };
  // }

  // static forChild(
  //   config: ConfigOption = {}
  // ): ModuleWithProviders<FormlyModule> {
  //   return {
  //     ngModule: FormlyModule,
  //     providers: [
  //       { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
  //       { provide: FORMLY_CONFIG, useValue: config, multi: true },
  //       FormlyFormBuilder,
  //     ],
  //   };
  // }

  // constructor(
  //   configService: FormlyConfig, 
  //   @Optional() @Inject(FORMLY_CONFIG) configs: ConfigOption[] = []
  // ) {
  //   if (!configs) {
  //     return;
  //   }

  //   configs.forEach((config) => configService.addConfig(config));
  // }
}
