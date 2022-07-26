import {
  Component,
  OnInit, 
  ChangeDetectionStrategy, 
  ElementRef, 
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { bus, preloadApp, startApp, destroyApp } from "wujie";

@Component({
  selector: 'app-wujie',
  templateUrl: './wujie.component.html',
  styleUrls: ['./wujie.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WuJieComponent implements AfterViewInit {

  constructor(
    private elRef: ElementRef,
    private cd: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void { 
    startApp({
      name: 'wujie',
      url: window.location.origin,
      sync: true,
      alive: false,
      el:  this.elRef.nativeElement.querySelector('#wujie'),
      fetch: this.fetch,
      props: {}
    })
  }

  fetch = (url: RequestInfo, options: RequestInit | undefined) => {
    console.log('fetch:' + url)
    return window.fetch(url, { ...options, credentials: "include" })
  }

}
