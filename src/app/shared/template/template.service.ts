import { Injectable, InjectionToken, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { FooterComponentPortal, HeaderComponentPortal, DefaultComponentPortal, IconPortal, InputPortal } from './template.component'
import { FormlyFieldConfig } from '@ngx-formly/core';

interface paramsType {
  type: string,
  [key: string]: any;
}

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
    private injector: Injector,
  ) {}

  templateMap:  Map<string, any> = new Map([
    ['icon', IconPortal],
    // ['input', InputPortal],
  ])

  get (templateRef: paramsType, field?: FormlyFieldConfig): ComponentPortal<any> | null {
    const componentToPortal = templateRef?.type ? this.templateMap.get(templateRef.type) : null

    if (!componentToPortal) {
      return null
    }
    let containerPortal = new ComponentPortal(componentToPortal, null, this.createInjector({
      field: field,
      ...templateRef.componentParams
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
