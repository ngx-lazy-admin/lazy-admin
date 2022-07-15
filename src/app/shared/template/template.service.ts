import { Injectable, InjectionToken, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { FooterComponentPortal, HeaderComponentPortal, DefaultComponentPortal } from './template.component'
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CONTAINER_DATA, paramsType } from './type';
import { IconPortal } from './icon/icon.template';
import { InputPortal } from './input/input.template';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  templateMap = new Map();

  constructor(
    private injector: Injector,
  ) {
    this.templateMap.set('input', InputPortal);
    this.templateMap.set('icon', IconPortal);
  }

  get (templateRef: paramsType, data?: any, field?: FormlyFieldConfig): ComponentPortal<any> | null {

    const componentToPortal = templateRef?.type ? this.templateMap.get(templateRef.type) : null

    if (!componentToPortal) {
      return null
    }
    let containerPortal = new ComponentPortal(componentToPortal, null, this.createInjector({
      field: field,
      value: data[templateRef.key]
    }));

    return containerPortal
  }

  createInjector(data: any): Injector {
    const injectorTokens = new WeakMap();

    injectorTokens.set(CONTAINER_DATA, data);

    return Injector.create({
      parent: this.injector,
      providers: [
        { provide: CONTAINER_DATA, useValue: injectorTokens }
      ]
    });
  }
}
