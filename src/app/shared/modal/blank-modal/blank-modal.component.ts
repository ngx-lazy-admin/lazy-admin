
import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DispatchService } from '../dispatch.service';

@Component({
  selector: 'app-blank-modal',
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
          <i class="p-3" nz-icon nzType="minus" nzTheme="outline" (click)="min(id)"></i>
          <!-- 转页面 -->
          <i class="p-3" nz-icon nzType="fullscreen" nzTheme="outline" (click)="max(id)"></i>
          <!-- 关闭 -->
          <i class="p-3" nz-icon nzType="close" nzTheme="outline" (click)="close(id)"></i>
        </div>
      </div>
    </div>

  </div>
  `,
  styles: [
    `
    .modal-wrap {
      margin: -24px;
      cursor: pointer;
      height: 200px;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlankModal {

  @Input() fields?: FormlyFieldConfig[];
  @Input() model?: any;
  @Input() nzTitle?: string | TemplateRef<{}>;
  @Input() modal: any;
  @Input() id: string = '';
  @Input() click?: (type: string, id: any) => void;

  @Output() onMin = new EventEmitter<string>();
  @Output() onMax = new EventEmitter<string>();
  // @Output() click = new EventEmitter<string>();

  form = new FormGroup({});

  constructor(
    private cd: ChangeDetectorRef,
		private dispatch: DispatchService
  ) {

  }

  min (id: string) {
    if (this.click) {
      this.click('min', id)
    }
  }

  max (id: string) {
    if (this.click) {
      this.click('max', id)
    }

  }

  close (id: string) {
    this.dispatch.close(id)
  }
}
