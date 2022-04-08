import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
  Injectable,
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { inNextTick } from 'ng-zorro-antd/core/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';

import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import hotkeys from 'hotkeys-js';

import { editor } from 'monaco-editor';

import { FieldService } from '@app/services/api/field';
import { execEval } from 'app/fields/types/share-field.type';

import * as beautify from 'js-beautify';
import { CacheService } from '@app/services/router/cache.service';

export interface headerInfoType {
  title: string,
  content: string,
  subtitle: string,
}

export interface errorResultType {
  status: string,
  subTitle: string,
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  rooterChange?: Subscription;

  info?: headerInfoType | null;

  // form params

  form = new FormGroup({});

  model: any = {
    name: 1,
  }

  options: FormlyFormOptions = {
    formState: {
      caches: '1'
    }
  };

  fields: FormlyFieldConfig[] = []

  // lading

  loading: boolean = true;
  status = 200;

  // cache

  codeType = 'javascript'

  // routeCache: any = {};

  private destroy$ = new Subject<void>();

  isVisible = false;
  editor?: editor.ICodeEditor;
  code: string = ``;

  constructor(
    private cd: ChangeDetectorRef,
    private fieldService: FieldService,
    public route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private nzConfigService: NzConfigService,
    private routeCache: CacheService
  ) {
    this.rooterChange = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.routeCache.get(this.router.url)) {
          this.render(this.routeCache.get(this.router.url))
          this.routeCache.recoveryHistoryPosition(this.router.url)
        } else {
          this.loading = true
          this.fieldService.getField(this.router.url).subscribe(result => {
            this.routeCache.set(this.router.url, result)
            this.render(this.routeCache.get(this.router.url))
          }, err => {
            this.loading = false;
            this.status = err?.status
            this.clearData();
          })
        }
      }
    });

    hotkeys('.', (event, handler) => {
      this.isVisible = true;
      this.cd.markForCheck();
    });

    hotkeys('Esc', (event, handler) => {
      this.isVisible = false
      this.cd.markForCheck();
    });

    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: 'vs-dark',
        minimap: {
          enabled: false
        },
        language: "php",
        autoIndent: true,
        formatOnPaste: true,
        formatOnType: true,
        wordwrap: 'on',
      }
    });
  }

  render(result: any) {
    this.loading = true;
    // this.clearData();

    setTimeout(() => {
      try {
        this.fields = typeof result?.fields === 'string' ? execEval(result?.fields) : result.fields;
        this.model = result?.data;
        this.code = beautify(JSON.stringify(result.fields), { 
          brace_style: "expand",
          keep_array_indentation: true,
        })
        // this.code = result.fields
        console.log('code')

        this.info = result?.info;
      } catch (error) {
        this.fields = []
        this.model = {}
        this.info = null;
      } finally {
        this.status = 200;
        this.loading = false;

        this.cd.detectChanges();
      }
    }, 0);
  }

  submit(form: FormGroup) {
    form.markAsDirty();
  }

  resetForm(): void {
    setTimeout(() => {
      this.options.parentForm?.resetForm();
      this.form.markAsUntouched();
    }, 0);
  }

  clearData() {
    this.fields = [];
    this.model = {};
    this.info = null;
    this.form.reset();
    this.cd.detectChanges();
  }

  editorInitialized($event: any) {
    this.editor = $event;
    $event.onDidChangeModelContent(() => {
      try {
        let codes = $event.getValue()
        this.fields = execEval(codes)
        setTimeout(() => {
          this.cd.markForCheck();
        }, 0);
      } catch (error) {
        this.cd.markForCheck();
      }
    })
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


}
  
