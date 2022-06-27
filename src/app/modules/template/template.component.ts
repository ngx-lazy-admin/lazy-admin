import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'div[header-portal]',
  template: 'Hello, this is a header portal ',
})
export class HeaderComponentPortal {}


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
  selector: 'div[icon-portal]',
  template: '<i nz-icon [nzType]="nzType" [nzTheme]="nzTheme"></i>',
})
export class IconComponentPortal {
  nzType: string = 'step-backward';
  nzTheme: ThemeType = 'outline'
}
