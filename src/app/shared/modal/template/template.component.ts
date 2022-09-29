import {
  Component,
  ChangeDetectionStrategy,
	TemplateRef,
	ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Portal, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-share-template',
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTemplateComponent {

  // 弹窗模板
  @ViewChild('portalTemplateRef') portalTemplateRef!: TemplateRef<any>;

  // 弹窗标题的模板
  @ViewChild('titleTemplateRef') titleTemplateRef!: TemplateRef<any>;

  // 弹窗组件的模板
  @ViewChild('modalFormContent', { read: TemplateRef }) modalFormContent!: TemplateRef<any>;

  selectedPortal!: Portal<any>;

  constructor(
    private _viewContainerRef: ViewContainerRef
  ) {}
  
  // 获取模板
  public getTemplateRef (params?: any): TemplateRef<any> {
    this.selectedPortal = new TemplatePortal(this.titleTemplateRef, this._viewContainerRef, {
      context: params
    });
    return this.portalTemplateRef
  }

  open (ref: any) {
    console.log(ref)
  }
}
