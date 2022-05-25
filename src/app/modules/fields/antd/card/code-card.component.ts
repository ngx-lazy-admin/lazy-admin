import { 
  Component, 
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  TemplateRef
} from '@angular/core';
import { Subject } from 'rxjs';
import { execEval, ShareFieldType } from '../share-field.type';

import * as prettier from "prettier/standalone";
import * as parserBabel from "prettier/parser-babel";

@Component({
  selector: 'div[code-card]',
  template: `
    <section class="code-box" [ngClass]="{ expand: nzExpanded }" [attr.id]="nzId">
      <section class="code-box-demo" [ngClass]="bodyClass">
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
        <div class="code-box-description" [innerHTML]="nzDescription"></div>
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
      <section *ngIf="nzExpanded">
        <div class="f14 position-relative p-3">
        <nz-tabset >
          <nz-tab nzTitle="Fields">
            <!-- <textarea  nz-input rows="20" class="w-100 p-3" style="height: 400px" [ngModel]="fieldCode" (ngModelChange)="codeChange($event)"></textarea> -->
            <nz-code-editor 
              [nzEditorOption]="{ 
                language: 'json'
              }" 
              class="editor"
              [(ngModel)]="code"
              (nzEditorInitialized)="editorInitialized($event)">
            </nz-code-editor>
          </nz-tab>
          <nz-tab nzTitle="Model">
             <pre>{{ this.formControl.value | json }}</pre>
          </nz-tab>
        </nz-tabset>
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

  get nzDescription(): string {
    return this.formControl.value?.description || this.to.description || this.to.nzDescription || ''
  }

  get nzBodyStyle(): { [key: string]: string } {
		return this.to.nzBodyStyle || this.to.bodyStyle || '';
	}

  get bodyClass(): { [key: string]: string } {
		return this.to.bodyClass || '';
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

  code: string = ''

  navigateToFragment(): void {
    console.log('navigateToFragment')
  }

  // 编辑器初始化
  editorInitialized($event: any) {
    $event.onDidChangeModelContent(() => {
      let codes = $event.getValue()
      this.codeChange(codes)
    })
  }

  // 代码变更
  codeChange (code: string) {
    try {
      const fieldGroup = execEval(code);
      fieldGroup.forEach((item: any) => {
        item.options = this.options
      })
      this.field.fieldGroup = [...fieldGroup]
      this.cd.detectChanges();
    } catch (error) {
      console.log(error)
    }
  }

  // 复制代码
  copyCode(): void {
    if (!this.code) {
      this.initCode();
    }
    this.copy(this.code)
  }

  // 复制命令
  copyGenerateCommand(command: string): void {
    this.copy(command).then(() => {
      this.commandCopied = true;
      setTimeout(() => {
        this.commandCopied = false;
        this.check();
      }, 1000);
    });
  }

  // 复制
  copy(value: string): Promise<string> {
    const promise = new Promise<string>((resolve): void => {
      // @ts-ignore
      let copyTextArea = null as HTMLTextAreaElement;
      try {
        copyTextArea = document.createElement('textarea');
        copyTextArea.style.height = '0px';
        copyTextArea.style.opacity = '0';
        copyTextArea.style.width = '0px';
        document.body.appendChild(copyTextArea);
        copyTextArea.value = value;
        copyTextArea.select();
        document.execCommand('copy');
        resolve(value);
      } finally {
        if (copyTextArea && copyTextArea.parentNode) {
          copyTextArea.parentNode.removeChild(copyTextArea);
        }
      }
    });

    return promise;
  }

  // 展开
  expandCode(expanded: boolean): void {
    console.log('expandCode')
    this.nzExpanded = !this.nzExpanded;
    this.initCode();
  }

  // 初始化code
  initCode () {
    let code = JSON.parse(JSON.stringify(this.field.fieldGroup))
    this.delNullProperty(code)
    this.code = prettier.format(JSON.stringify(code), {
      parser: "json",
      plugins: [parserBabel],
    });
  }

  // 打开IDE
  openOnlineIDE(ide: 'StackBlitz' | 'CodeSandbox' = 'StackBlitz'): void {
    console.log('openOnlineIDE')
  }

  //遍历删除对象中的空值属性
  delNullProperty (obj: any): any {
    // 遍历对象中的属性
    for( let i in obj ){
      // 首先除去常规空数据，用delete关键字
      // console.log(i)
      if (i === '_keyPath' || obj[i] === undefined || obj[i] === null || obj[i] === "" || JSON.stringify(obj[i]) === '{}' || JSON.stringify(obj[i]) === '[]') {
        delete obj[i]
      } else if(obj[i].constructor === Object) { // 如果发现该属性的值还是一个对象，再判空后进行迭代调用
        if(Object.keys(obj[i]).length === 0) delete obj[i] // 判断对象上是否存在属性，如果为空对象则删除
        this.delNullProperty(obj[i])
      }else if(obj[i].constructor === Array){ //对象值如果是数组，判断是否为空数组后进入数据遍历判空逻辑
        if( obj[i].length === 0 ){ //如果数组为空则删除
          delete obj[i]
        }else{
          for( let index = 0 ; index < obj[i].length ; index++){//遍历数组
            if(obj[i][index] === undefined || obj[i][index] === null || obj[i][index] === "" || JSON.stringify(obj[i][index]) === "{}" ){
              obj[i].splice(index,1)//如果数组值为以上空值则修改数组长度，移除空值下标后续值依次提前
              index--//由于数组当前下标内容已经被替换成下一个值，所以计数器需要自减以抵消之后的自增
            }
            if(obj[i].constructor === Object){//如果发现数组值中有对象，则再次进入迭代
              this.delNullProperty(obj[i])
            }
          }
        }
      }
    }
  }


  check(): void {

  }

  ngAfterViewInit() {
    // this.cd.detectChanges();
  }

  // tslint:disable-next-line: no-any
  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
