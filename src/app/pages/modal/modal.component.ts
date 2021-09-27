
import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import hotkeys from 'hotkeys-js';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  ngOnInit(): void {}

  tplModalButtonLoading = false;
  disabled = false;

  tplModal:any = null;
  distance = {x: 0, y: 0}

  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {
    // hotkeys('f5', (event, handler) => {
    //   // Prevent the default refresh event under WINDOWS system
    //   event.preventDefault() 
    //   alert('you pressed F5!') 
    // });
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMask: false,
      nzMaskClosable: false,
      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => console.log('Click ok')
    });
    console.log(this.tplModal.getElement())
  }

  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = false;
    modelRef.destroy();
  }


  dragStarted($event: any) {
    if ($event.distance) {
      this.distance.x = this.distance.x + $event.distance.x
      this.distance.y = this.distance.y + $event.distance.y
  
      let translate = `translate3d(${this.distance.x}px, ${this.distance.y}px, 0px)`
      this.renderer.setStyle(this.tplModal.getElement().getElementsByClassName('ant-modal-content')[0], 'transform', translate)  
    }
 }

  dragEnded ($event: any) {
    if ($event.distance) {
      this.distance.x += $event.distance.x
      this.distance.y += $event.distance.y
  
      let translate = `translate3d(${this.distance.x}px, ${this.distance.y}px, 0px)`
      this.renderer.setStyle(this.tplModal.getElement().getElementsByClassName('ant-modal-content')[0], 'transform', translate)  
    }
  }

  dragMove ($event: any) {
    let translate = `translate3d(${this.distance.x + $event.distance.x}px, ${this.distance.y + $event.distance.y}px, 0px)`
    this.renderer.setStyle(this.tplModal.getElement().getElementsByClassName('ant-modal-content')[0], 'transform', translate)
  }
}
