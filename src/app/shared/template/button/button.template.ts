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
  selector: 'div[button-portal]',
  template: `
    <button
      nz-button
      [nzType]="type"
      (click)="click($event)">
      {{text}}
    </button>
  `,
})
export class buttonPortal {

  @Input() disabled: boolean = false;

  @Input() ghost: boolean = false;
  @Input() loading: boolean = false;
  @Input() shape: 'circle'|'round' = 'round';
  @Input() size: boolean  = false;
  @Input() type: 'primary'|'dashed'|'link'|'text'  = 'primary';
  @Input() block: boolean = false
  @Input() danger: boolean = false
  @Input() style: Object = {}
  @Input() text: string = ''


  constructor(
    @Inject(CONTAINER_DATA) private data: any | null = null
  ) {
    if (data?.get(CONTAINER_DATA)) {
      const option  = data.get(CONTAINER_DATA).value.options
      this.disabled = option.disabled || false
      this.ghost = option.ghost || false
      this.loading = option.loading || false
      this.shape = option.shape || 'round'
      this.size = option.size || false
      this.type = option.type || false
      this.block = option.block || false
      this.danger = option.danger || false
      this.style = option.style || {}
      this.text = option.text || ''
    }
  }

  click ($event: any) {
    console.log(this.data?.get(CONTAINER_DATA))
    console.log($event)
    if (this.data?.get(CONTAINER_DATA).value.options.click) {
      runFunction(this.data?.get(CONTAINER_DATA).value.options.click, this.data?.get(CONTAINER_DATA).field, $event)
    }
  }
}


