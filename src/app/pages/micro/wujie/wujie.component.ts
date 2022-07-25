import {
  Component,
  OnInit, 
  ChangeDetectionStrategy, 
  ElementRef, 
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
// import { bus, preloadApp, startApp, destroyApp } from "wujie";

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

  }

  wuJieFetch = (url: string, options: any) => {
    // 替换url中包含主应用的域名成子应用的域名 
    let tmpUrl = url

    let microHost = ''

    console.log(url, url)

    if (url.includes(window.location.host) && microHost) {
      tmpUrl = url.replace(window.location.host, microHost)
    }
    // 需要保留cookie的路由
    const exclude: any[] = []
    const headers = (options && options.headers) || {}

    // credentials  
    // 1. omit: 从不发送 ColorsMockFields, 
    // 2. same-origin: 只有当 URL 与响应脚本同源才发送
    // 3. include: 不论是不是跨域的请求，总是发送请求资源域

    const credentials = exclude.some(host => url.toString().includes(host)) ? 'include' : 'same-origin'

    return window
      .fetch(tmpUrl, {
        ...options,
        credentials: credentials,
        headers: {
          ...headers,
          'Origin': window.location.origin
        }
      })
      .then(
        response => response,
        error => {
          console.error(error)
          return { text: () => '' }
        }
      )
  }
}
