
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject,
  Input, isDevMode, NgZone, OnDestroy, OnInit, Optional } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { DOCUMENT } from '@angular/common';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

import { ALAINDEFAULTVAR, DEFAULT_COLORS, DEFAULT_VARS } from './setting.types';
import { environment } from '../../../../environments/environment';

enum ThemeType {
  dark = 'dark',
  default = '',
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
  data: NzSafeAny = {};
  color: string;
  colors = DEFAULT_COLORS;
  theme: boolean = false;
  currentTheme = ThemeType.default;
  colorWeek: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private msg: NzMessageService,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private doc: NzSafeAny,
    @Optional() private directionality: Directionality
  ) {
    this.color = this.DEFAULT_PRIMARY;
    this.resetData();
  }

  private get DEFAULT_PRIMARY(): string {
    return DEFAULT_VARS['primary-color'].default;
  }

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });

    console.log(environment)
  }

  pxChange(val: number): void {
    // this.i.value = `${val}px`;
  }

  format = (value: number) => `${value} px`;

  genVars(): NzSafeAny {
    const { data, color, validKeys } = this;
    const vars: { [key: string]: string } = {
      [`@primary-color`]: color
    };
    validKeys.filter(key => key !== 'primary-color').forEach(key => (vars[`@${key}`] = data[key].value));
    return vars;
  }



  // 加载JavaScript
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

  // 加载less
  loadLess(): Promise<void> {
    if (this.loadedLess) {
      return Promise.resolve();
    }
    return this.loadStyle('/assets/styles/custom.less', 'stylesheet/less')
      .then((res) => {
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

  // 运行less
  runLess(): void {
    this.loadLess().then(() => {
      if ((window as NzSafeAny).less.modifyVars) {
        (window as NzSafeAny).less.modifyVars(this.genVars()).then(() => {
          this.ngZone.run(() => this.cdr.detectChanges());
        });
      }
    });
  }

  // 弹窗
  toggle(): void {
    this.collapse = !this.collapse;
  }

  // 颜色变更
  changeColor(color: string): void {
    this.color = color;
    Object.keys(DEFAULT_VARS)
      .filter(key => DEFAULT_VARS[key].default === '@primary-color')
    this.resetData();
  }



  removeUnusedTheme(theme: ThemeType): void {
    if (theme) {
      document.documentElement.classList.remove(theme);
      const removedThemeStyle = document.getElementById(theme);
      if (removedThemeStyle) {
        document.head.removeChild(removedThemeStyle);
      }
    }
  }

  changeTheme (type: Event): void {
    let head = document.querySelector('head')

    let child = this.currentTheme ? document.querySelector('#' + this.currentTheme) : null;
    if (this.currentTheme && document.querySelector('#' + this.currentTheme)) {
      if (child) {
        head?.removeChild(child)
      }
    }

    // 设置当前主体
    this.currentTheme = this.reverseTheme(this.currentTheme)
    document.querySelector('html')?.setAttribute('data-theme', this.currentTheme)


    this.loadTheme(false); 
  } 

  // 改变主题
  reverseTheme(theme: string): ThemeType {
    return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  }

  loadTheme(firstLoad = true) {
    const theme = this.currentTheme;
    if (theme) {
      this.loadStyle(`${theme}.css`).then((res) => {
        this.removeUnusedTheme(this.reverseTheme(theme));
      }, (err) => {
        console.log(err)
      });
    }
  }

  // 加载css
  loadStyle(path: string, rel: string = 'stylesheet', innerContent?: string) {
    return new Promise(resolve => {
      const node = this.doc.createElement('link') as HTMLLinkElement;
      node.rel = rel;
      node.type = 'text/css';
      node.id = this.currentTheme;
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

  setLayout(name: string, value: NzSafeAny = null): void {
    // this.settingSrv.setLayout(name, value);
  }

  // 重置
  resetData(): void {
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

  changeColorWeek ($event: Event) {
    this.doc.body.classList[$event ? 'add' : 'remove']('color-weak');
  }


  // 复制剪贴板
  copyVar(): void {
    const vars = this.genVars();
    const copyContent = Object.keys(vars)
      .map(key => `${key}: ${vars[key]};`)
      .join('\n');
    // copy(copyContent);
    this.msg.success('Copy success');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
