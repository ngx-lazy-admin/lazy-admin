import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { 
  Component, 
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  TemplateRef,
  Inject,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[code-card]',
  template: `
    <section class="code-box" [ngClass]="{ expand: nzExpanded }" [attr.id]="nzId">
      <section class="code-box-demo">
        <ng-container *ngFor="let item of field.fieldGroup; let i = index; trackBy: trackByFn">
          <formly-field [field]="item"></formly-field>
        </ng-container>
      </section>
      <section class="code-box-meta markdown">
        <div class="code-box-title">
          <a (click)="navigateToFragment()"
          >{{ nzTitle }}
            <a class="edit-button" [attr.href]="nzHref" target="_blank" rel="noopener noreferrer">
              <i nz-icon nzType="edit"></i>
            </a>
          </a>
        </div>
        <div class="code-box-description">
          {{ nzDescription }}
        </div>
        <div class="code-box-actions">
          <i
            nz-tooltip
            [nzTooltipTitle]="!onlineIDELoading ? 
              (language==='zh' ? '在 CodeSandbox 上打开':'Edit On CodeSandbox') : 
              (language==='zh'? '加载中...' : 'Loading...')"
            nz-icon
            nzType="code-sandbox"
            class="code-box-code-copy"
            (click)="openOnlineIDE('CodeSandbox')"
          ></i>
          <i
            [nzTooltipTitle]="!onlineIDELoading ?
              language==='zh' ? '在 StackBlitz 上打开':'Edit On StackBlitz':
              language==='zh'? '加载中...' : 'Loading...'"
            nz-tooltip
            nz-icon
            nzType="thunderbolt"
            class="code-box-code-copy"
            (click)="openOnlineIDE()"
          ></i>
          <i
            [nzTooltipTitle]="!copyLoading ?
            language==='zh'? '复制代码' : 'Copy Code' :
            language==='zh'? '加载中...' : 'Loading...'"
            nz-tooltip
            nz-icon
            [nzType]="copied ? 'check' : 'snippets'"
            class="code-box-code-copy"
            [class.ant-tooltip-open]="copied"
            (click)="copyCode()"
          ></i>
          <i
            [nzTooltipTitle]="language==='zh'? '复制生成代码命令' : 'Copy Generate Command'"
            *ngIf="nzGenerateCommand"
            nz-tooltip
            nz-icon
            [nzType]="commandCopied ? 'check' : 'code'"
            class="code-box-code-copy"
            [class.ant-tooltip-open]="commandCopied"
            (click)="copyGenerateCommand(nzGenerateCommand)"
          ></i>
          <span class="code-expand-icon"
                nz-tooltip
                [nzTooltipTitle]="nzExpanded ?
                (language==='zh'? '收起代码' : 'Hide Code') :
                (language==='zh'? '显示代码' : 'Show Code')"
                (click)="expandCode(!nzExpanded)">
            <ng-container [ngSwitch]="theme">
              <ng-container *ngSwitchCase="'dark'">
                  <img
                    alt="expand code"
                    src="https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg"
                    [class.code-expand-icon-show]="nzExpanded"
                    [class.code-expand-icon-hide]="!nzExpanded"
                  />
                  <img
                    alt="expand code"
                    src="https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg"
                    [class.code-expand-icon-show]="!nzExpanded"
                    [class.code-expand-icon-hide]="nzExpanded"
                  />
              </ng-container>
              <ng-container *ngSwitchDefault>
                <img
                  alt="expand code"
                  src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                  [class.code-expand-icon-show]="nzExpanded"
                  [class.code-expand-icon-hide]="!nzExpanded"
                />
                  <img
                    alt="expand code"
                    src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                    [class.code-expand-icon-show]="!nzExpanded"
                    [class.code-expand-icon-hide]="nzExpanded"
                  />
              </ng-container>
            </ng-container>

          </span>
        </div>
      </section>
      <section class="highlight-wrapper" [ngClass]="{ 'highlight-wrapper-expand': nzExpanded }">
        <div class="highlight p-3">
          <pre >{{ model | json }}</pre>
        </div>
      </section>
    </section>

  `,
  styleUrls: [
    './code-card.component.less'
  ],
  styles: [
    `
    .simulate-iframe {
      transform: translateX(0px);
      display: block;
      > * {
        display: block;
        height: 100%;
        overflow: auto;
        transform: translateX(0px);
        > * {
          overflow: auto;
          height: 100%;
        }
      }
    }

    nz-code-box {
      display: block;
    }

    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})


export class CodeCardField extends ShareFieldType  implements OnDestroy {

  get nzTitle(): string | TemplateRef<void> {
    return this.formControl.value?.title || this.to.title || this.to.nzTitle || ''
  }

  get nzDescription(): string | TemplateRef<void> {
    return this.formControl.value?.description || this.to.description || this.to.nzDescription || ''
  }

  get nzBodyStyle(): { [key: string]: string } {
		return this.to.nzBodyStyle || this.to.bodyStyle || '';
	}

  get nzIcon(): string | TemplateRef<void> {
    return this.to.nzIcon || this.to.icon || ''
  }

  get nzShape(): 'circle' | 'square' {
    return this.to.nzShape || this.to.shape || 'circle'
  }

  get nzSize(): 'large' | 'small' | 'default' | number {
    return this.to.nzSize || this.to.size || 'default'
  }

  get nzGap(): number {
    return this.to.nzGap || this.to.nzGap || 4
  }

  get nzSrc(): string  {
    return this.formControl.value?.src || this.to.nzSrc || this.to.src || ''
  }

  get nzSrcSet(): string {
    return this.to.srcSet || this.to.nzSrcSet || ''
  }

  get nzAlt(): string {
    return this.to.nzAlt || this.to.alt || ''
  }

  get nzText(): string {
    return this.to.nzText || this.to.text || ''
  }

  // nzTitle!: string;
  nzExpanded = false;
  nzHref!: string;
  nzLink!: string;
  nzId!: string;
  nzIframeHeight: number | null = 360;
  nzComponentName = '';
  nzSelector = '';
  nzGenerateCommand = '';


  highlightCode?: string;
  copied = false;
  commandCopied = false;


  language = 'zh';
  theme = 'default';
  destroy$ = new Subject();
  codeLoaded = false;
  onlineIDELoading = false;
  copyLoading = false;

  navigateToFragment(): void {
    console.log('navigateToFragment')
  }

  copyCode(): void {
    setTimeout(() => {
      this.copyLoading = !this.codeLoaded;
      this.check();
    }, 120);
  }

  copyGenerateCommand(command: string): void {
    this.copy(command).then(() => {
      this.commandCopied = true;
      setTimeout(() => {
        this.commandCopied = false;
        this.check();
      }, 1000);
    });
  }

  copy(value: string): Promise<string> {
    const promise = new Promise<string>((resolve): void => {
      // @ts-ignore
      let copyTextArea = null as HTMLTextAreaElement;
      try {
        copyTextArea = this.dom.createElement('textarea');
        copyTextArea.style.height = '0px';
        copyTextArea.style.opacity = '0';
        copyTextArea.style.width = '0px';
        this.dom.body.appendChild(copyTextArea);
        copyTextArea.value = value;
        copyTextArea.select();
        this.dom.execCommand('copy');
        resolve(value);
      } finally {
        if (copyTextArea && copyTextArea.parentNode) {
          copyTextArea.parentNode.removeChild(copyTextArea);
        }
      }
    });

    return promise;
  }

  expandCode(expanded: boolean): void {
    console.log('expandCode')
    this.nzExpanded = !this.nzExpanded;
  }

  openOnlineIDE(ide: 'StackBlitz' | 'CodeSandbox' = 'StackBlitz'): void {
    console.log('openOnlineIDE')
  }

  check(): void {

  }

  // tslint:disable-next-line:no-any
  constructor(
    @Inject(DOCUMENT) private dom: any,
    public cd: ChangeDetectorRef,
    public http: HttpClient,
    public readonly zone: NgZone,
    public message: NzMessageService
  ) {
    super(cd, http, zone, message);
  }

  ngOnInit(): void {

  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
