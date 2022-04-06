import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyForm } from './components/formly.form';
import { FormlyField } from './components/formly.field';
import { FormlyAttributes } from './components/formly.attributes';

import { FormlyConfig, ConfigOption, FORMLY_CONFIG } from './services/formly.config';
import { FormlyFormBuilder } from './services/formly.form.builder';

import { FormlyGroup } from './templates/formly.group';
import { FormlyTemplateType } from './templates/field-template.type';
import { FieldArrayType } from './templates/field-array.type';
import { FormlyValidationMessage } from './templates/formly.validation-message';

import { CoreExtension } from './extensions/core/core';
import { FieldFormExtension } from './extensions/field-form/field-form';
import { FieldExpressionExtension } from './extensions/field-expression/field-expression';
import { FieldValidationExtension } from './extensions/field-validation/field-validation';


export function defaultFormlyConfig(formlyConfig: FormlyConfig): ConfigOption {
  return {
    types: [
      { name: 'formly-group', component: FormlyGroup },
      { name: 'formly-template', component: FormlyTemplateType },
    ],
    extensions: [
      { name: 'core', extension: new CoreExtension(formlyConfig) },
      { name: 'field-validation', extension: new FieldValidationExtension(formlyConfig) },
      { name: 'field-form', extension: new FieldFormExtension(formlyConfig) },
      { name: 'field-expression', extension: new FieldExpressionExtension() },
    ],
  };
}

@NgModule({
  declarations: [
    FormlyForm,
    FormlyField,
    FormlyAttributes,
    FormlyGroup,
    FormlyValidationMessage,
    FormlyTemplateType,
    FieldArrayType as any,
  ],
  entryComponents: [FormlyGroup, FormlyTemplateType],
  exports: [
    FormlyForm,
    // FormlyField,
    FormlyAttributes, 
    FormlyGroup, 
    FormlyValidationMessage
  ],
  imports: [CommonModule],
})
export class FormlyModule {
  static forRoot(config: ConfigOption = {}): ModuleWithProviders<FormlyModule> {
    return {
      ngModule: FormlyModule,
      providers: [
        { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
        { provide: FORMLY_CONFIG, useValue: config, multi: true },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
        FormlyConfig,
        FormlyFormBuilder,
      ],
    };
  }

  static forChild(config: ConfigOption = {}): ModuleWithProviders<FormlyModule> {
    return {
      ngModule: FormlyModule,
      providers: [
        { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
        { provide: FORMLY_CONFIG, useValue: config, multi: true },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
        FormlyFormBuilder,
      ],
    };
  }

  constructor(
    configService: FormlyConfig,
    @Optional() @Inject(FORMLY_CONFIG) configs: ConfigOption[] = [],
  ) {
    if (!configs) {
      return;
    }

    configs.forEach(config => configService.addConfig(config));
  }
}
