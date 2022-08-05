
import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DispatchService } from '../dispatch.service';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';

@Component({
  selector: 'div[app-blank-modal]',
  template: `
  <div class="modal-wrap border" nz-resizable [nzBounds]="bound"  (nzResize)="onResize($event)">
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
    </div>111
    <!-- <div nz-resizable [nzMinWidth]="256" (nzResize)="onResize($event)" style="width: 250px; height: 250px;" class="bg-warning"></div> -->
    <nz-resize-handles [nzDirections]="['right', 'bottom']"></nz-resize-handles>

  </div>
  `,
  styles: [
    `
    .modal-wrap {
      /* margin: -24px; */
      cursor: pointer;
      height: 100%;
    }
    :host {
        display: block;
      }
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #eee;
        border: 1px solid #ddd;
        cursor: pointer;
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
  bound: ElementRef<HTMLElement>

  constructor(
    private cd: ChangeDetectorRef,
    private elRef: ElementRef,
		private dispatch: DispatchService
  ) {
    this.bound = this.elRef.nativeElement.querySelector('.ant-modal-content')
    console.log(this.elRef.nativeElement.parentNode)
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

  ids = -1;
  width = 256;
  height = 256;

  onResize({ width, height }: NzResizeEvent): void {
    this.bound = this.elRef.nativeElement.parentNode.parentNode
    cancelAnimationFrame(this.ids);
    this.ids = requestAnimationFrame(() => {
      // this.elRef.nativeElement.parentNode.parentNode.style.width = width + 'px'
      // this.elRef.nativeElement.parentNode.parentNode.style.height = height + 'px'
    });
  }
}
