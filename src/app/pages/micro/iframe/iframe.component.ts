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
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.less']
})
export class IframeComponent implements AfterViewInit {
  loading = false;
  iframeObj: any = {};
  currentIframe: any;
  private destroy$ = new Subject();

  constructor(
    private elRef: ElementRef,
    private router: Router,
    private cd: ChangeDetectorRef,
    private message: NzMessageService
  ) {}

  ngAfterViewInit(): void {
    this.initIframe();
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.initIframe();
      }
    });
  }

  initIframe() {
    if (this.loading) {
      return;
    }
    this.loading = true;

    const messageId = this.message.loading('页面加载中...').messageId;

    if (!this.iframeObj[window.location.href]) {
      const iframe = document.createElement('iframe');
      iframe.src = window.location.href.replace(window.location.origin + '/micro/iframe', window.location.origin);
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
