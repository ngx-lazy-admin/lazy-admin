import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { inNextTick } from 'ng-zorro-antd/core/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { of, Subject, Subscription } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';

import hotkeys from 'hotkeys-js';
import { editor } from 'monaco-editor';

import { FieldService } from 'src/app/services/api/field';
import { execEval } from 'src/app/shared/fields/antd/share-field.type';
import { CacheService } from 'src/app/services/router/cache.service';
import { ModalService } from 'src/app/shared/modal';
import { PreviewService } from 'src/app/shared/preview';

import { format } from "prettier/standalone";
import * as parserBabel from "prettier/parser-babel";
import { CodeEditorService } from 'src/app/shared/code-editor';
import { HttpClient } from '@angular/common/http';

export interface headerInfoType {
  title: string,
  content: string,
  subtitle: string,
}

export interface errorResultType {
  status: string,
  subTitle: string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-3 d-block',
  }
})
export class FormComponent {

  rooterChange?: Subscription;

  info?: headerInfoType | null;

  // form params
  model: any = {}
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = []
  options: FormlyFormOptions = {
    formState: {
      caches: '1'
    }
  };

  // lading
  loading: boolean = true;
  status = 200;

  // cache
  codeType = 'json'

  isVisible = false;
  editor?: editor.ICodeEditor;
  code: string = ``;
  cacheFields: string = '';

  private destroy$ = new Subject<void>();

  constructor(
    private cd: ChangeDetectorRef,
    private fieldService: FieldService,
    public route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private nzConfigService: NzConfigService,
    private routeCache: CacheService,
    private modalService: ModalService,
    private previewService: PreviewService,
    private codeEditorService: CodeEditorService,
    private http: HttpClient
  ) {
    // 监听路由变化
    this.rooterChange = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event)
        // 获取当前页面的配置
        this.loading = true
        this.cd.markForCheck();
        const resultCache = this.routeCache.get(this.router.url);
        if (resultCache) {
          this.render(resultCache)
          this.routeCache.recoveryHistoryPosition(this.router.url)
        } else {
          this.loading = true
          // 组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。 
          // 它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。
          this.fieldService.getField(this.router.url).subscribe(result => {
            this.routeCache.set(this.router.url, result)
            this.render(this.routeCache.get(this.router.url))
          }, err => {
            this.loading = false;
            this.status = err?.status
            this.clearData();
            this.cd.markForCheck();
          })
        }
      }
    });

    // 
    this.route.paramMap.subscribe(item => {
      console.log(item)
    })

    // 初始化编辑器
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: 'vs-dark',
        minimap: {
          enabled: false
        },
        language: "javascript",
        autoIndent: true,
        formatOnPaste: true,
        formatOnType: true,
        wordwrap: 'on',
      }
    });

    hotkeys('Esc', (event, handler) => {
      this.isVisible = false
      this.cd.markForCheck();
    });

    hotkeys('.', (event, handler) => {
      const codeEditor = this.codeEditorService.create({
        nzHeight: '100vh',
        nzPlacement: 'bottom',
        nzWrapClassName: 'dragModal',
        nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
        fields: this.cacheFields,
        model: this.model,
        nzMask: false
      })
    });

    hotkeys('m', (event, handler) => {
      // 转弹窗
      // const modal = this.modalService.open('form', {
      //   nzWidth: '900px',
      //   nzWrapClassName: 'dragModal',
      //   nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      //   fields: this.cacheFields,
      //   model: this.model,
      //   nzMask: false,
      //   nzFooter: [
      //     {
      //       label: '取消',
      //       onClick: () => modal.destroy()
      //     },
      //     {
      //       label: '确定',
      //       type: 'primary',
      //       onClick: ($event: any) => {
      //         return new Promise(resolve => setTimeout(() => {
      //           console.log($event)
      //         }, 60));
      //       }
      //     }
      //   ]
      // })
    });
  }

  render(result: any) {
    this.loading = true;
    // this.clearData();
    this.info = result?.info;

    try {
      // from 重置
      this.form.reset({}, {onlySelf: false, emitEvent: false} );
      this.form = new FormGroup({});

      this.cacheFields = result?.fields
      this.fields = typeof result?.fields === 'string' ? execEval(result?.fields) : result.fields;

      this.model = result?.data;
      this.options.formState.cacheFields = result.fields

      this.code = format(JSON.stringify(result.fields), {
        parser: "json",
        plugins: [parserBabel],
      });
    } catch (error) {
      this.fields = []
      this.model = {}
      this.info = null;
      console.log(error)
    } finally {
      this.status = 200;
      this.loading = false;

      this.cd.detectChanges();
    }
  }

  clearData() {
    this.fields = [];
    this.model = {};
    this.info = null;
    this.form.reset();
    this.cd.detectChanges();
    this.cd.markForCheck();
  }

  private setup(): void {
    // The `setup()` is invoked when the Monaco editor is loaded. This may happen asynchronously for the first
    // time, and it'll always happen synchronously afterwards. The first `setup()` invokation is outside the Angular
    // zone, but further invokations will happen within the Angular zone. We call the `setModel()` on the editor
    // instance, which tells Monaco to add event listeners lazily internally (`mousemove`, `mouseout`, etc.).
    // We should avoid adding them within the Angular zone since this will drastically affect the performance.
    this.ngZone.runOutsideAngular(() =>
      inNextTick()
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {

        })
    );
  }

  submit() {
    if (this.form.valid) {
      // alert(JSON.stringify(this.model));
    }
  }

  preview (url: string) {
    this.previewService.open(url)
  }

  backHome () {
    this.http.get('web/file/1111').subscribe(item => {
      console.log('111')
    })
  }

  ngOnDestroy() {
    if (this.rooterChange) {
      this.rooterChange.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
}
