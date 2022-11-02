import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-form-modal',
  template: `
    <div class="modal-wrap">
      <div
        class="ant-modal-header p-0 d-block "
        cdkDrag
        cdkDragHandle
        cdkDragRootElement=".ant-modal-content"
        style="cursor: move;"
      >
        <div class="d-flex justify-content-between">
          <div class="p-3">{{ nzTitle || '标题' }} </div>
          <div class="d-flex align-items-center" style="cursor: auto">
            <!-- 最小化页面 -->
            <i class="p-3" nz-icon nzType="minus" nzTheme="outline" (click)="min(id)"></i>
            <!-- 转页面 -->
            <i class="p-3" nz-icon nzType="fullscreen" nzTheme="outline" (click)="max(id)"></i>
            <!-- 关闭 -->
            <i class="p-3" nz-icon nzType="close" nzTheme="outline" (click)="closeModal(id)"></i>
          </div>
        </div>
      </div>

      <ng-container *ngIf="fields && fields.length">
        <div class="p-3">
          <form [formGroup]="form">
            <formly-form class="row" [form]="form" [fields]="fields" [(model)]="model"></formly-form>
          </form>
        </div>
      </ng-container>
    </div>
  `,
  styles: [``]
})
export class FormModal {
  @Input() fields?: FormlyFieldConfig[];
  @Input() model?: any;
  @Input() nzTitle?: string | TemplateRef<{}>;
  @Input() modal?: NzModalRef;
  @Input() id: string = '';
  @Input() click?: (type: string, id: any) => void;
  @Input() close?: () => void;

  @Output() onMin = new EventEmitter<string>();
  @Output() onMax = new EventEmitter<string>();

  form = new FormGroup({});

  min(id: string) {
    if (this.click) {
      this.click('min', id);
    }
  }

  max(id: string) {
    if (this.click) {
      this.click('max', id);
    }
  }

  closeModal(id: string) {
    if (this.close) {
      this.close();
    }
  }
}
