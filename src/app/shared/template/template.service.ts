import { Injectable, InjectionToken, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { FooterComponentPortal, HeaderComponentPortal, DefaultComponentPortal } from './template.component'
import { FormlyFieldConfig } from '@ngx-formly/core';
import { paramsType } from './type';
import { IconPortal } from './icon/icon.template';
import { InputPortal } from './input/input.template';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');


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

  get (options: paramsType, data?: any, field?: FormlyFieldConfig): ComponentPortal<any> | null {
    console.log(options)
    const componentToPortal = options?.type ? this.templateMap.get(options.type) : null
    if (!componentToPortal) {
      return null
    }
    let containerPortal = new ComponentPortal(componentToPortal, null, this.createInjector({
      field: field,
      value: {
        options: options,
        data: data
      }
    }));
    console.log(containerPortal)


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
