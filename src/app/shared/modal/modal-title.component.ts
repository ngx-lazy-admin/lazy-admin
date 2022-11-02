import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-title',
  template: `
    <div class="modal-wrap">
      <div class="ant-modal-header p-0 d-block " cdkDrag cdkDragHandle cdkDragRootElement=".ant-modal-content">
        <div class="d-flex justify-content-between">
          <div class="p-3" [innerHTML]="nzTitle"></div>
          <div class="d-flex align-items-center" style="cursor: auto">
            <i class="p-3" nz-icon nzType="minus" nzTheme="outline" (click)="click('min')"></i>
            <i class="p-3" nz-icon nzType="fullscreen" nzTheme="outline" (click)="click('max')"></i>
            <i class="p-3" nz-icon nzType="close" nzTheme="outline" (click)="click('close')"></i>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ModalTitleComponent {
  @Input() nzTitle?: string | TemplateRef<{}>;
  @Input() id: string = '';

  @Output() clickEvent = new EventEmitter<any>();

  click(type: string) {
    this.clickEvent.emit({ type: type, id: this.id });
  }
}
