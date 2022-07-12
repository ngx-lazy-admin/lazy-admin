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
import { CONTAINER_DATA } from './template.service';
import { execFunction, runFunction } from 'src/app/utils/utils';

// const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

@Component({
  selector: 'div[header-portal]',
  template: `Hello, this is a header portal 
    <ng-template #templatePortalContent>Hello, this is a template portal</ng-template>
  `,
})
export class HeaderComponentPortal {
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  public a = 1
}


@Component({
  selector: 'div[footer-portal]',
  template: 'Hello, this is a footer portal',
})
export class FooterComponentPortal {}

@Component({
  selector: 'div[default-portal]',
  template: 'Hello, this is a default portal ',
})
export class DefaultComponentPortal {}

@Component({
  selector: 'div[input-portal]',
  template: '  <input nz-input placeholder="Basic usage" [(ngModel)]="model" />',
})
export class InputPortal {
  @Input() model: string = '';

  constructor(
    @Inject(CONTAINER_DATA) public data: WeakMap<object, any> | null = null
  ) {
    if (data?.get(CONTAINER_DATA)) {
      this.model = data?.get(CONTAINER_DATA).value || data?.get(CONTAINER_DATA).nzType || ''
    }
  }

  click ($event: any) {
    if (this.data?.get(CONTAINER_DATA).click) {
      runFunction(this.data?.get(CONTAINER_DATA).click, this.data?.get(CONTAINER_DATA).field, $event)
    }
  }
}

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


