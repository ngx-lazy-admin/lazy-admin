import { NgModule, ModuleWithProviders, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';


export function defaultFormlyConfig(config: any): any {
  return {
    types: [
      { name: 'formly-group', component: FormlyGroup },
      { name: 'formly-template', component: FormlyTemplateType },
    ]
  };
}

@NgModule({
  declarations: [

  ],
  exports: [],
  imports: [CommonModule],
})
export class FormlyModule {
  static forRoot(config: ConfigOption = {}): ModuleWithProviders<FormlyModule> {
    return {
      ngModule: FormlyModule,
      providers: [
        { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
        { provide: FORMLY_CONFIG, useValue: config, multi: true },
        FormlyConfig,
        FormlyFormBuilder,
      ],
    };
  }

  static forChild(
    config: ConfigOption = {}
  ): ModuleWithProviders<FormlyModule> {
    return {
      ngModule: FormlyModule,
      providers: [
        { provide: FORMLY_CONFIG, multi: true, useFactory: defaultFormlyConfig, deps: [FormlyConfig] },
        { provide: FORMLY_CONFIG, useValue: config, multi: true },
        FormlyFormBuilder,
      ],
    };
  }

  constructor(
    configService: FormlyConfig, 
    @Optional() @Inject(FORMLY_CONFIG) configs: ConfigOption[] = []
  ) {
    if (!configs) {
      return;
    }

    configs.forEach((config) => configService.addConfig(config));
  }
}