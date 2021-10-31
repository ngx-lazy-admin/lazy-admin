
/* declarations: NzModalCustomComponent */
import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, Optional   } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
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

  createComponentModal(): void {
    this.modalService.createComponentModal()
  }
}
