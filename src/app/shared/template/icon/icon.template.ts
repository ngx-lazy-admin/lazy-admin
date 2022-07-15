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
  selector: 'div[icon-portal]',
  template: '<i nz-icon [nzType]="nzType" [nzTheme]="nzTheme" [ngStyle]="style" (click)="click($event)"></i>',
})
export class IconPortal {

  @Input() nzType: string = '';
  @Input() nzTheme: ThemeType = 'outline';
  @Input() nzSpin: boolean = false;
  @Input() nzTwotoneColor: string  = '';
  @Input() style: Object = {}

  constructor(
    @Inject(CONTAINER_DATA) public data: WeakMap<object, any> | null = null
  ) {
    if (data?.get(CONTAINER_DATA)) {
      this.nzType = data?.get(CONTAINER_DATA).type || data?.get(CONTAINER_DATA).nzType || ''
      this.nzTheme = data?.get(CONTAINER_DATA).theme || data?.get(CONTAINER_DATA).nzTheme || 'outline'
      this.nzSpin = data?.get(CONTAINER_DATA).spin || data?.get(CONTAINER_DATA).nzSpin || false
      this.nzTwotoneColor = data?.get(CONTAINER_DATA).twotoneColor || data?.get(CONTAINER_DATA).nzTwotoneColor || false
      this.style = data?.get(CONTAINER_DATA).style || {}
    }
  }

  click ($event: any) {
    if (this.data?.get(CONTAINER_DATA).click) {
      runFunction(this.data?.get(CONTAINER_DATA).click, this.data?.get(CONTAINER_DATA).field, $event)
    }
  }
}


