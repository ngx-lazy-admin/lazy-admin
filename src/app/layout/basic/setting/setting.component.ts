
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject,
  Input, isDevMode, NgZone, OnDestroy, OnInit, Optional } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { ALAINDEFAULTVAR, DEFAULT_COLORS, DEFAULT_VARS } from './setting.types';

enum ThemeType {
  dark = 'dark',
  default = 'default',
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.setting-drawer]': 'true',
    '[class.setting-drawer-rtl]': `dir === 'rtl'`
  },
})
export class SettingDrawerComponent implements OnInit, OnDestroy {
  @Input() autoApplyColor = true;
  @Input() compilingText = 'Compiling...';
  @Input() devTips = `When the color can't be switched, you need to run it once: npm run color-less`;

  private loadedLess = false;
  private destroy$ = new Subject<void>();
  dir: Direction = 'ltr';
  isDev = isDevMode();
  collapse = false;
  // get layout() {
  //   return this.settingSrv.layout;
  // }
  data: NzSafeAny = {};
  color: string;
  colors = DEFAULT_COLORS;
  theme: boolean = false;
  currentTheme = ThemeType.default;

  

  constructor(
    private cdr: ChangeDetectorRef,
    private msg: NzMessageService,
    // private settingSrv: SettingsService,
    // private lazy: LazyService,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    @Optional() private directionality: Directionality
  ) {
    this.color = this.DEFAULT_PRIMARY;
    this.resetData();
  }

  // private get cachedData(): { [key: string]: NzSafeAny } {
  //   return this.settingSrv.layout[ALAINDEFAULTVAR] || {};
  // }

  private get DEFAULT_PRIMARY(): string {
    return DEFAULT_VARS['primary-color'].default;
  }

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });

    // if (this.autoApplyColor && this.color !== this.DEFAULT_PRIMARY) {
    //   this.changeColor(this.color);
    //   this.runLess();
    // }
  }

  pxChange(val: number): void {
    // this.i.value = `${val}px`;
  }

  format = (value: number) => `${value} px`;

  loadStyle(path: string, rel: string = 'stylesheet', innerContent?: string) {
    return new Promise(resolve => {
      const node = this.doc.createElement('link') as HTMLLinkElement;
      node.rel = rel;
      node.type = 'text/css';
      node.href = path;
      if (innerContent) {
        node.innerHTML = innerContent;
      }
      this.doc.getElementsByTagName('head')[0].appendChild(node);
      const item = {
        path,
        status: 'ok'
      };
      resolve(item);
    });
  }

  loadScript(path: string, innerContent?: string) {
    return new Promise(resolve => {
      const node = this.doc.createElement('script') as NzSafeAny;
      node.type = 'text/javascript';
      node.src = path;
      node.charset = 'utf-8';
      if (innerContent) {
        node.innerHTML = innerContent;
      }

      this.doc.getElementsByTagName('head')[0].appendChild(node);
      const item = {
        path,
        status: 'ok'
      };
      resolve(item);
    });
  }

  private async loadLess(): Promise<void> {
    if (this.loadedLess) {
      return Promise.resolve();
    }
    return this.loadStyle('/assets/styles/dark.less', 'stylesheet/less')
      .then((res) => {
        console.log(res)
        const lessConfigNode = this.doc.createElement('script');
        lessConfigNode.innerHTML = `
          window.less = {
            async: true,
            env: 'production',
            javascriptEnabled: true
          };
        `;
        this.doc.body.appendChild(lessConfigNode);
      })
      .then(() => this.loadScript('https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js'))
      .then(() => {
        this.loadedLess = true;
      });
  }

  private genVars(): NzSafeAny {
    const { data, color, validKeys } = this;
    const vars: { [key: string]: string } = {
      [`@primary-color`]: color
    };
    validKeys.filter(key => key !== 'primary-color').forEach(key => (vars[`@${key}`] = data[key].value));
    // this.setLayout(ALAINDEFAULTVAR, vars);
    return vars;
  }

  private runLess(): void {
    const { ngZone, msg, cdr } = this;
    const msgId = msg.loading(this.compilingText, { nzDuration: 0 }).messageId;
    console.log(this.genVars())
    setTimeout(() => {
      this.loadLess().then(() => {
        msg.remove(msgId);
        console.log('loadLess');
        setTimeout(() => {
          let v = `
            @primary-color: #ff8877;
          `;

          (window as NzSafeAny).less.modifyVars({
            '@primary-color': '#5B83AD',
            '@buttonText': '#D9EEF2'
          }).then(() => {
            msg.remove(msgId);
            ngZone.run(() => cdr.detectChanges());
          });   
        }, 1000);
      });
    }, 200);
  }

  toggle(): void {
    this.collapse = !this.collapse;
  }

  changeColor(color: string): void {
    this.color = color;
    console.log(this.color)
    Object.keys(DEFAULT_VARS)
      .filter(key => DEFAULT_VARS[key].default === '@primary-color')
      // .forEach(key => delete this.cachedData[`@${key}`]);
    this.resetData();
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

  private reverseTheme(theme: string): ThemeType {
    return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  }

  private removeUnusedTheme(theme: ThemeType): void {
    document.documentElement.classList.remove(theme);
    const removedThemeStyle = document.getElementById(theme);
    if (removedThemeStyle) {
      document.head.removeChild(removedThemeStyle);
    }
  }

  public loadTheme(firstLoad = true) {
    const theme = this.currentTheme;

    this.loadCss(`${theme}.css`, theme).then((res) => {
      this.removeUnusedTheme(this.reverseTheme(theme));
    }, (err) => {
      console.log(err)
    });
  }


  changeTheme (type: Event): void {
    
    this.currentTheme = this.reverseTheme(this.currentTheme)
    
    // 修改默认主题
    document.querySelector('html')?.setAttribute('data-theme', this.currentTheme)
    this.loadTheme(false); 
  } 

  setLayout(name: string, value: NzSafeAny = null): void {
    // this.settingSrv.setLayout(name, value);
  }

  // 重置
  private resetData(): void {
    const data = DEFAULT_VARS;
    Object.keys(data).forEach(key => {
      const value = data[key].default || '';
      data[key].value = value === `@primary-color` ? '' : value;
    });
    this.data = data;
    this.runLess();
  }

  private get validKeys(): string[] {
    return Object.keys(this.data).filter(key => this.data[key].value !== this.data[key].default);
  }


  // 重置
  reset(): void {
    // this.color = this.DEFAULT_PRIMARY;
    // this.settingSrv.setLayout(ALAINDEFAULTVAR, {});
    this.resetData();
  }

  // 复制剪贴板
  copyVar(): void {
    const vars = this.genVars();
    const copyContent = Object.keys(vars)
      .map(key => `${key}: ${vars[key]};`)
      .join('\n');
    // copy(copyContent);
    this.msg.success('Copy success');
    console.log(copyContent)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
