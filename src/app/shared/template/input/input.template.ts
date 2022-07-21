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
  ComponentRef,
} from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { ThemeType } from '@ant-design/icons-angular';
import { CONTAINER_DATA } from '../template.service';
import { execFunction, runFunction } from 'src/app/utils';
import { Subject } from 'rxjs';

interface iconType {
  type: string,
  theme: 'fill' | 'outline' | 'twotone',
  [key: string]: any;
}

@Component({
  selector: 'div[input-portal]',
  template: `
    <input
      nz-input
      placeholder="Basic usage" 
      [ngModel]="model[options.key]"
      (ngModelChange)="change($event)"
    />
  `, 
})
export class InputPortal {
  @Input() model: string = '';

  change$ = new Subject();

  options
  fields

  constructor(
    @Inject(CONTAINER_DATA) public data: WeakMap<object, any> | null = null
  ) {
    if (data?.get(CONTAINER_DATA)) {
      this.model = data?.get(CONTAINER_DATA).model
      this.options = data?.get(CONTAINER_DATA).options
      this.fields = data?.get(CONTAINER_DATA).fields
    }
  }

  click ($event: any) {
    if (this.data?.get(CONTAINER_DATA).click) {
      // runFunction(this.data?.get(CONTAINER_DATA).click, this.data?.get(CONTAINER_DATA).field, $event)
    }
  }

  change ($event: any) {
    if (this.data?.get(CONTAINER_DATA).model) {
      this.data.get(CONTAINER_DATA).model[this.options.key] = $event
      this.change$.next($event)
    }
  }
}