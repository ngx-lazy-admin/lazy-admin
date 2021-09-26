
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
    hotkeys('f5', (event, handler) => {
      // Prevent the default refresh event under WINDOWS system
      event.preventDefault() 
      alert('you pressed F5!') 
    });
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
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      modelRef.destroy();
    }, 1000);
  }

  createComponentModal(): void {
    // const modal = this.modal.create({
    //   nzTitle: 'Modal Title',
    //   nzContent: NzModalCustomComponent,
    //   nzViewContainerRef: this.viewContainerRef,
    //   nzComponentParams: {
    //     title: 'title in component',
    //     subtitle: 'component sub title，will be changed after 2 sec'
    //   },
    //   nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
    //   nzFooter: [
    //     {
    //       label: 'change component title from outside',
    //       onClick: componentInstance => {
    //         componentInstance!.title = 'title in inner component is changed';
    //       }
    //     }
    //   ]
    // });
    // const instance = modal.getContentComponent();
    // modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // // Return a result when closed
    // modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));

    // // delay until modal instance created
    // setTimeout(() => {
    //   instance.subtitle = 'sub title is changed';
    // }, 2000);
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
