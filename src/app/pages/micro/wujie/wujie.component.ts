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

    const url = window.location.href.replace(window.location.origin + '/micro/wujie', window.location.origin)

    console.log(url)

    startApp({
      name: 'wujie',
      url: '//localhost:4200',
      // attrs: { src: '//localhost:4200/components/button' },
      sync: true,
      el:  this.elRef.nativeElement.querySelector('#wujie'),
      fetch: this.fetch,
      props: {}
    })
  }

  fetch = (url: RequestInfo, options: RequestInit | undefined) => {
    console.log(url)
    return window.fetch(url, { ...options, credentials: "include" })
  }

}
