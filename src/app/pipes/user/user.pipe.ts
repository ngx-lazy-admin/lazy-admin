import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(str: string, ...args: unknown[]): unknown {
    let s = str
      .split(';')
      .filter(item => item)
      .map(item => {
        const name = item.split('(');
        let url;
        if (name[0]) {
          url = `WXWork://message?username=${name[0]}`;
        } else {
          url = `http://wpa.qq.com/msgrd?v=3&uin=${name[0]}&site=qq&menu=yes`;
        }
        return `<a class="mr-2" style="white-space: nowrap;" href="${url}">${item};</a>`;
      })
      .join('');

    return this.sanitizer.bypassSecurityTrustHtml(s);
  }
}
