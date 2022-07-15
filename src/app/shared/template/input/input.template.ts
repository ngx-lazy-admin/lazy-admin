import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  Input,
  Inject,
  InjectionToken,
} from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { ThemeType } from '@ant-design/icons-angular';
import { CONTAINER_DATA } from '../type';
import { execFunction, runFunction } from 'src/app/utils/utils';

interface iconType {
  type: string,
  theme: 'fill' | 'outline' | 'twotone',
  [key: string]: any;
}

@Component({
  selector: 'div[input-portal]',
  template: `
    <input nz-input placeholder="Basic usage" [(ngModel)]="model" (ngModelChange)="change($event)" />
  `, 
})
export class InputPortal {
  @Input() model: string = '';

  constructor(
    @Inject(CONTAINER_DATA) public data: WeakMap<object, any> | null = null
  ) {
    if (data?.get(CONTAINER_DATA)) {
      this.model = data?.get(CONTAINER_DATA).value
    }
  }

  click ($event: any) {
    if (this.data?.get(CONTAINER_DATA).click) {
      // runFunction(this.data?.get(CONTAINER_DATA).click, this.data?.get(CONTAINER_DATA).field, $event)
    }
  }

  change ($event: any) {
    console.log($event)
  }
}