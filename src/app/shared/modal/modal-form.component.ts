
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'nz-modal-custom-component',
  template: `
  <div class="modal-wrap">
    <div 
      class="ant-modal-header d-block ant-modal-title p-3"
      cdkDrag
      cdkDragHandle
      cdkDragRootElement=".dragModal"
      style="cursor: move;">
      {{ nzTitle || "标题" }} 
    </div>

    <ng-container *ngIf="fields && fields.length">
      <div class="modal-content p-3">
        <form [formGroup]="form" >
          <formly-form [form]="form" [fields]="fields" [(model)]="model"></formly-form>
        </form>
      </div>
    </ng-container>
  </div>
  `,
  styles: [
    `
    .modal-wrap {
      margin: -24px;
    }
    `
  ]
})
export class NzModalCustomComponent {

  @Input() fields?: FormlyFieldConfig[];
  @Input() model?: any;
  @Input() nzTitle?: string | TemplateRef<{}>;

  form = new FormGroup({});
}
