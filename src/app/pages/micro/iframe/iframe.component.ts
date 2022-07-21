
import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewContainerRef,
  Renderer2,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.less']
})
export class IframeComponent implements AfterViewInit {

  loading = false;
  lastElement: any

  constructor(
    private elRef: ElementRef,
    private router: Router,
    private cd: ChangeDetectorRef,
  ) {}

  iframe: any = {}

  ngAfterViewInit(): void { 
    this.initIframe()
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { 
        this.initIframe()
      }
    })
    // this.addEventListenMessage()
  }

  initIframe () {
    if (this.loading) {
      return
    }

    if (this.iframe[window.location.href]) {
      this.elRef.nativeElement.querySelector('#iframe').appendChild(this.iframe[window.location.href]);
    } else {
      this.loading = true;
      const iframe = document.createElement('iframe');
      const url = window.location.href.replace(window.location.origin + '/micro/iframe', window.location.origin);

      iframe.src = url;
      iframe.className="w-100 h-100 border-none";
      iframe.onload = () => { 
        this.loading = false;
      };
      this.elRef.nativeElement.querySelector('#iframe').appendChild(iframe);
      this.iframe[window.location.href] = iframe
      this.lastElement = iframe
    }

  }

  addEventListenMessage () {
    window.addEventListener('message', (e) => {
      console.log(e)
    })
  }
}
