import { Injectable } from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { FooterComponentPortal, HeaderComponentPortal, DefaultComponentPortal } from './template.component'
import * as tem from './index'

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  
  templateMap: Map<string, any> = new Map();

  constructor() {
    this.templateMap.set('default', DefaultComponentPortal)
    this.templateMap.set('header', HeaderComponentPortal)
    this.templateMap.set('footer', FooterComponentPortal)
  }

  get (type: string = 'header'): ComponentPortal<any> | null {
    return new ComponentPortal(this.templateMap.get(type) || this.templateMap.get('default'))
  }
}
