import { Component, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-iframe',
  template: `<div id="iframe" class="w-100 h-100 position-absolute top-0 start-0 bottom-0 end-0"></div>`,
  styleUrls: ['./iframe.component.less']
})
export class IframeComponent implements AfterViewInit {
  loading = false;
  iframeObj: any = {};
  currentIframe: any;
  URL: SafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  private destroy$ = new Subject();

  constructor(
    private elRef: ElementRef,
    private router: Router,
    private cd: ChangeDetectorRef,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngAfterViewInit(): void {
    this.init();
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  init() {
    const messageId = this.message.loading('页面加载中...').messageId;

    const URL = this.route.snapshot.queryParams.origin || window.location.href.replace(window.location.origin + '/micro/iframe', window.location.origin);
    this.URL = this.sanitizer.bypassSecurityTrustResourceUrl(URL);

    if (!this.iframeObj[window.location.href]) {
      const iframe = document.createElement('iframe');
      iframe.src = URL;
      iframe.className = 'w-100 h-100 border-none d-block';
      // iframe.sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
      this.iframeObj[window.location.href] = iframe;
    }

    this.currentIframe = this.iframeObj[window.location.href];
    this.currentIframe.onload = () => {
      this.loading = false;
      this.message.remove(messageId);
      this.cd.markForCheck();
    };

    this.elRef.nativeElement.querySelector('#iframe').innerHTML = '';
    this.elRef.nativeElement.querySelector('#iframe').appendChild(this.currentIframe);
  }

  addEventListenMessage() {
    window.addEventListener('message', e => {
      console.log(e);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
