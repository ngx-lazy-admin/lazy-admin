import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, Optional   } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modals',
  template: `
    <ng-template #tplTitle >
      <div 
        cdkDrag
        cdkDrop
        cdkDragHandle
        cdkDragBoundary=".ng-trigger-modalContainer" 
        cdkDragRootElement=".dragModal"
        style="cursor: move;">
        Title Template
      </div>
    </ng-template>

  `,
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {}

  constructor(
    // private viewContainerRef: ViewContainerRef,
    // @Optional()
    private modalService: ModalService
  ) {
    // this.modalService.viewContainerRef = this.viewContainerRef
  }

}
