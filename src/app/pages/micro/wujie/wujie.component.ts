import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ChangeDetectorRef,
  AfterViewInit,
  Host
} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { bus, preloadApp, startApp, destroyApp } from 'wujie';

@Component({
  selector: 'app-wujie',
  template: `<div id="wujie" class="w-100 h-100"></div>`,
  styleUrls: ['./wujie.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WuJieComponent implements AfterViewInit {
  constructor(
    private elRef: ElementRef,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  loading = false;
  iframeObj: any = {};
  currentIframe: any;
  private count = 0
  private destroy$ = new Subject();

  // fetch = (url: RequestInfo, options: RequestInit | undefined) => {
  //   console.log('fetch:' + url)
  //   return window.fetch(url, { ...options, credentials: "include" })
  // }

  // woa环境携带登录态必须添加credential
  fetch = (url: RequestInfo | string, options: RequestInit | undefined) => {
    const includeFlag = false;
    return window.fetch(url, { ...options, credentials: includeFlag ? 'include' : 'omit' });
  };

  ngAfterViewInit(): void {
    this.init();
    
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  init() {

    const origin = this.route.snapshot.queryParams.origin;
 
    if (origin) {
      startApp({
        name: 'wujie' + this.count++,
        url: origin,
        sync: false,
        alive: false,
        el: this.elRef.nativeElement.querySelector('#wujie'),
        fetch: this.fetch,
        props: {}
      });
    }
  }
}
