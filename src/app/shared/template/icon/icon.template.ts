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
import { CONTAINER_DATA } from '../template.service';
import { execFunction, runFunction } from 'src/app/utils/utils';

interface iconType {
  type: string,
  theme: 'fill' | 'outline' | 'twotone',
  [key: string]: any;
}

@Component({
  selector: 'div[icon-portal]',
  template: '<i nz-icon [nzType]="nzType" [nzTheme]="nzTheme" [ngStyle]="style" (click)="click($event)"></i>{{text}}',
})
export class IconPortal {

  @Input() nzType: string = '';
  @Input() nzTheme: ThemeType = 'outline';
  @Input() nzSpin: boolean = false;
  @Input() nzTwotoneColor: string  = '';
  @Input() style: Object = {}
  @Input() text: string = ''


  constructor(
    @Inject(CONTAINER_DATA) public data: any | null = null
  ) {
    if (data?.get(CONTAINER_DATA)) {
      const option  = data.get(CONTAINER_DATA).value.options
      console.log(option)
      this.nzType = option.icon || ''
      this.text = option.text || ''
      this.nzTheme = option.theme || 'outline'
      this.nzSpin = option.spin || false
      this.nzTwotoneColor = option.twotoneColor || false
      this.style = option.style || {}
    }
  }

  click ($event: any) {
    if (this.data?.get(CONTAINER_DATA).click) {
      runFunction(this.data?.get(CONTAINER_DATA).click, this.data?.get(CONTAINER_DATA).field, $event)
    }
  }
}


