import { Injectable } from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { FooterComponentPortal, HeaderComponentPortal, DefaultComponentPortal, IconPortal } from './template.component'
import * as tem from './index'
import { NzButtonComponent } from 'ng-zorro-antd/button';

interface paramsType {
  type: string,
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  templateMap:  Map<string, any> = new Map([
    ['icon', IconPortal],
    ['header', HeaderComponentPortal],
  ])

  get (params: paramsType): ComponentPortal<any> | null {
    const portal = params?.type && this.templateMap.get(params.type) ? new ComponentPortal(this.templateMap.get(params.type)) : null;
    console.log(portal)
    
    return portal
  }
}
