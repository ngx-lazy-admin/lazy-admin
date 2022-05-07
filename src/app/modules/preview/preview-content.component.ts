
import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
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
      style="cursor: move; ">
      <div class="d-flex justify-content-between">
        <div class="p-3">{{ nzTitle || "标题" }} </div>
        <div class="d-flex align-items-center" style="cursor: auto">
          <i class="p-3" nz-icon nzType="close" nzTheme="outline" (click)="close(id)"></i>
        </div>
      </div>
    </div>
    <iframe style="width: 100%; height: 200px" id="viewer" name="viewer" allow="fullscreen; xr-spatial-tracking;" src="https://threejs.org/examples/fbx?url=cosurl&zz" style="display: unset;"></iframe>
  </div>
  `,
  styles: [
    `
    .modal-wrap {
      margin: -24px;
      cursor: pointer;
    }

    .ant-modal-header {
      position: absolute;
      width: 100%;
      background-color: rgba(0,0,0,0);
      border: none;
    }

    iframe#viewer {
      display: block !important;;
      width: 100%;
      height: 100%;
      height: 500px;
    }

    
    `
  ]
})
export class PreviewContent {

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
    if (this.click) {
      this.click('close', id)
    }
  }
}
