
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'custom-modal-content',
  template: `
  <div class="modal-wrap">
    <div class="ant-modal-header p-0 d-block "
      cdkDrag
      cdkDragHandle
      cdkDragRootElement=".ant-modal-content"
      style="cursor: move;">
      <div class="d-flex justify-content-between">
        <div class="p-3">{{ nzTitle || "标题" }} </div>
        <div class="d-flex align-items-center" style="cursor: auto">
          <!-- 最小化页面 -->
          <i class="p-3" nz-icon nzType="minus" nzTheme="outline" (click)="click($event)"></i>
          <!-- 转页面 -->
          <i class="p-3" nz-icon nzType="fullscreen" nzTheme="outline" (click)="fullscreen($event)"></i>
          <!-- 关闭 -->
          <i class="p-3" nz-icon nzType="close" nzTheme="outline" (click)="close($event)"></i>
        </div>
      </div>
    </div>

    <ng-container *ngIf="fields && fields.length">
      <div class="p-3">
        <form [formGroup]="form" >
          <formly-form class="row" [form]="form" [fields]="fields" [(model)]="model"></formly-form>
        </form>
      </div>
    </ng-container>
  </div>
  `,
  styles: [
    `
    .modal-wrap {
      margin: -24px;
      cursor: pointer;
    }
    `
  ]
})
export class ModalContent {

  @Input() fields?: FormlyFieldConfig[];
  @Input() model?: any;
  @Input() nzTitle?: string | TemplateRef<{}>;
  @Input() modal: any

  form = new FormGroup({});

  click ($event: any) {
    console.log(this.modal)
  }

  fullscreen ($event: any) {
    console.log('fullscreen')
  }

  close ($event: any) {
    console.log('close')
  }
}
