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
import { execFunction, runFunction } from 'src/app/utils/utils';
import { CONTAINER_DATA } from './type';

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



