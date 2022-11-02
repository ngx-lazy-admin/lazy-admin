import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { bus, preloadApp, startApp, destroyApp } from 'wujie';

@Component({
  selector: 'app-wujie',
  template: `<div id="wujie"></div>`,
  styleUrls: ['./wujie.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WuJieComponent implements AfterViewInit {
  constructor(private elRef: ElementRef, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    startApp({
      name: 'wujie',
      url: '//localhost:7400',
      sync: true,
      alive: false,
      el: this.elRef.nativeElement.querySelector('#wujie'),
      fetch: this.fetch,
      props: {}
    });
  }

  // fetch = (url: RequestInfo, options: RequestInit | undefined) => {
  //   console.log('fetch:' + url)
  //   return window.fetch(url, { ...options, credentials: "include" })
  // }

  // woa环境携带登录态必须添加credential
  fetch = (url: RequestInfo | string, options: RequestInit | undefined) => {
    const includeFlag = false;
    return window.fetch(url, { ...options, credentials: includeFlag ? 'include' : 'omit' });
  };
}
