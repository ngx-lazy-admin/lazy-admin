import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DispatchService, UsefulService, NeedsService } from '../dispatch.service';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import { ModalOptions } from 'ng-zorro-antd/modal';

@Component({
  selector: 'div[app-blank-modal]',
  template: `
    <div class="modal-wrap border" nz-resizable [nzBounds]="bound" (nzResize)="onResize($event)">
      <div
        class="ant-modal-header p-0 d-block mousedown"
        cdkDrag
        cdkDragHandle
        cdkDragRootElement=".ant-modal-content"
        style="cursor: move;"
      >
        <div class="d-flex justify-content-between">
          <div class="p-3">{{ nzTitle || '标题' }} </div>
          <div class="d-flex align-items-center" style="cursor: auto">
            <i class="p-3" nz-icon nzType="minus" nzTheme="outline" (click)="min(id)"></i>
            <i class="p-3" nz-icon nzType="fullscreen" nzTheme="outline" (click)="max(id)"></i>
            <i class="p-3" nz-icon nzType="close" nzTheme="outline" (click)="close(id)"></i>
          </div>
        </div>
      </div>
      <nz-resize-handles [nzDirections]="['right', 'bottom']"></nz-resize-handles>
      <div> </div>
    </div>

    <ng-template #titleTemplate>
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
            <i class="p-3" nz-icon nzType="minus" nzTheme="outline" (click)="min(id)"></i>
            <i class="p-3" nz-icon nzType="fullscreen" nzTheme="outline" (click)="max(id)"></i>
            <i class="p-3" nz-icon nzType="close" nzTheme="outline" (click)="close(id)"></i>
          </div>
        </div>
      </div>
    </ng-template>
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlankModal implements OnInit, AfterViewInit {
  @Input() fields?: FormlyFieldConfig[];
  @Input() model?: any;
  @Input() nzTitle?: string | TemplateRef<{}>;
  @Input() modal: any;
  @Input() id: string = '';
  @Input() click?: (type: string, id: any) => void;

  @Output() onMin = new EventEmitter<string>();
  @Output() onMax = new EventEmitter<string>();
  // @Output() click = new EventEmitter<string>();

  @ViewChild('titleTemplate', { read: TemplateRef }) titleTemplateRef!: TemplateRef<any>;

  form = new FormGroup({});
  bound: ElementRef<HTMLElement>;

  constructor(
    private cd: ChangeDetectorRef,
    private elRef: ElementRef,
    private dispatch: DispatchService,
    private NeedsService: NeedsService
  ) {
    this.bound = this.elRef.nativeElement.querySelector('.ant-modal-content');
    console.log('函数实例化');
    console.log(this);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    // Called after the constructor and called  after the first ngOnChanges()
    console.log(this.titleTemplateRef);
    this.NeedsService.setTemplate(this.titleTemplateRef);
  }

  min(id: string) {
    if (this.click) {
      this.click('min', id);
    }
    console.log(this);
  }

  max(id: string) {
    if (this.click) {
      this.click('max', id);
    }
  }

  close(id: string) {
    this.dispatch.close(id);
  }

  ids = -1;
  width = 256;
  height = 256;

  onResize({ width, height }: NzResizeEvent): void {
    this.bound = this.elRef.nativeElement.parentNode.parentNode;
    cancelAnimationFrame(this.ids);
    this.ids = requestAnimationFrame(() => {
      // this.elRef.nativeElement.parentNode.parentNode.style.width = width + 'px'
      // this.elRef.nativeElement.parentNode.parentNode.style.height = height + 'px'
    });
  }
}
