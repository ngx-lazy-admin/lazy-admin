import { Injectable, Renderer2 } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = '';
  
  constructor(
    private platform: Platform,
    private renderer: Renderer2,
  ) { }

  

  initTheme(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    const theme = (localStorage.getItem('site-theme')) || 'default';
    this.onThemeChange(theme, false);
  }

  onThemeChange(theme: string, notification: boolean = true): void {
    if (!this.platform.isBrowser) {
      return;
    }
    let loading: NzMessageRef | null = null;
    if (notification) {
      loading = this.nzMessageService.loading(this.language === 'en' ? `Switching theme...` : `切换主题中...`, { nzDuration: 0 });
    }
    this.renderer.addClass(this.document.activeElement, 'preload');

    const successLoaded = () => {
      this.theme = theme;
      this.appService.theme$.next(theme);
      this.renderer.setAttribute(document.body, 'data-theme', theme);
      localStorage.removeItem('site-theme');
      localStorage.setItem('site-theme', theme);
      ['dark', 'compact', 'aliyun']
        .filter(item => item !== theme)
        .forEach(item => {
          const dom = document.getElementById(`site-theme-${item}`);
          if (dom) {
            dom.remove();
          }
        });
      setTimeout(() => this.renderer.removeClass(this.document.activeElement, 'preload'));
      if (notification) {
        this.nzMessageService.remove(loading?.messageId);
        this.nzMessageService.success(this.language === 'en' ? `Switching theme successfully` : `切换主题成功`);
      }
    };
    if (theme !== 'default') {
      const style = document.createElement('link');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      style.id = `site-theme-${theme}`;
      style.href = `assets/${theme}.css`;
      style.onload = () => {
        successLoaded();
      };
      document.body.append(style);
    } else {
      successLoaded();
    }
  }
}
