
import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.less']
})
export class IframeComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {}

  tplModalButtonLoading = false;
  disabled = false;

  tplModal:any = null;
  distance = {x: 0, y: 0}

  currentIndex: number = 1001;

  loading = true;

  constructor(
    private modal: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private elRef: ElementRef,
    private cd: ChangeDetectorRef,
  ) {
    // hotkeys('f5', (event, handler) => {
    //   // Prevent the default refresh event under WINDOWS system
    //   event.preventDefault() 
    //   alert('you pressed F5!') 
    // });
    console.log(document.body)
  }

  ngAfterViewInit() { 
    this.loading = true;
    const iframe = document.createElement('iframe');
    iframe.src = 'https://mytable.woa.com/app/wbp/20/63'; 
    iframe.className="w-100 h-100";
    iframe.frameBorder="0";
    iframe.onload = () => { 
      this.loading = false;
      this.cd.markForCheck();
    };
    this.elRef.nativeElement.querySelector('#iframe').appendChild(iframe);
  }
}
