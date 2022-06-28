import { Injectable } from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { FooterComponentPortal, HeaderComponentPortal, DefaultComponentPortal, IconComponentPortal } from './template.component'
import * as tem from './index'
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  
  templateMap: Map<string, any> = new Map();

  constructor() {
    this.templateMap.set('default', DefaultComponentPortal)
    this.templateMap.set('header', HeaderComponentPortal)
    this.templateMap.set('footer', FooterComponentPortal)
    this.templateMap.set('button', NzButtonComponent) 
    this.templateMap.set('icon', IconComponentPortal)
  }

  get (type: string = 'header'): ComponentPortal<any> | null {
    const componentPortal = new ComponentPortal(this.templateMap.get(type) || this.templateMap.get('default'))
    return componentPortal
  }
}
