import { Injectable, InjectionToken, Injector } from '@angular/core';
import { ComponentPortal, DomPortalOutlet  } from '@angular/cdk/portal';
import { FooterComponentPortal, HeaderComponentPortal, DefaultComponentPortal } from './template.component'
import { FormlyFieldConfig } from '@ngx-formly/core';
import { paramsType } from './type';
import { IconPortal } from './icon/icon.template';
import { InputPortal } from './input/input.template';
import { buttonPortal } from './button/button.template';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  templateMap = new Map();
  elementRef: any;

  constructor(
    private injector: Injector,
  ) {
    this.templateMap.set('input', InputPortal);
    this.templateMap.set('icon', IconPortal);
    this.templateMap.set('button', buttonPortal);
  }

  get (options: paramsType, model?: any, field?: FormlyFieldConfig, ): ComponentPortal<any> | null {
    const componentToPortal = options?.type ? this.templateMap.get(options.type) : null
    if (!componentToPortal) {
      return null
    }

    let containerPortal = new ComponentPortal(componentToPortal, null, this.createInjector({
      options: options,
      field: field,
      model: model
    }));
    return containerPortal
  }

  gets (options: paramsType, model?: any, field?: FormlyFieldConfig, ): ComponentPortal<any> | null {
    const componentToPortal = options?.type ? this.templateMap.get(options.type) : null
    if (!componentToPortal) {
      return null
    }

    // let containerPortal = new ComponentPortal(componentToPortal, null, this.createInjector({
    //   options: options,
    //   field: field,
    //   model: model
    // }));
    // return containerPortal

    // const portal = new ComponentPortal(componentToPortal);
    // const portalHost = new DomPortalOutlet (
    //       this.elementRef.nativeElement,
    //       this.componentFactoryResolver,
    //       this.appRef,
    //       this.injector
    //     );

    // const componentRef = portalHost.attach(portal);
    // componentRef.instance.myInput = data;
    // componentRef.instance.myOutput.subscribe(...);
    // componentRef.changeDetectorRef.detectChanges();
    return null
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
