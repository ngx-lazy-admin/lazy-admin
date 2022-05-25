
import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import * as prettier from "prettier/standalone";
import * as parserBabel from "prettier/parser-babel";

import { execEval } from '../fields/share-field.type';

@Component({
  selector: 'custom-modal-content',
  template: `
	<div class="row" style="height: 100%;">
		<div class="col-6" style="height: 100%; position: relative;">
			<nz-tabset  style="height: 100%; position: relative;">
				<nz-tab nzTitle="Fields"  style="height: 100vh;  position: relative;">
					<nz-code-editor 
						class="editor" 
						style="height: 100vh;"
						[nzEditorMode]="'normal'"
						[ngModel]="code"
						[nzEditorOption]="{ 
							language: 'json'
						}" 
						(nzEditorInitialized)="editorInitialized($event)">
					</nz-code-editor>
				</nz-tab>
				<nz-tab nzTitle="Model">
				  <pre> {{ model | json}}</pre>
				</nz-tab>
			</nz-tabset>
		</div>

    <ng-container *ngIf="field && field.length">
      <form [formGroup]="form" class="col-6 w-50">
        <formly-form 
          class="row " 
          [form]="form" 
          [fields]="field" 
          [model]="model">
        </formly-form>
      </form>
    </ng-container>
	</div>
  `,
  styles: [
    `
    .modal-wrap {
      margin: -24px;
      cursor: pointer;
    }
    `
  ]
})
export class CodeEditorContent {

  @Input() model?: any;
  @Input() nzTitle?: string | TemplateRef<{}>;
  @Input() modal: any;
  @Input() id: string = '';
  @Input() click?: (type: string, id: any) => void;

  @Output() onMin = new EventEmitter<string>();
  @Output() onMax = new EventEmitter<string>();

  min (id: string) {
    if (this.click) {
      this.click('min', id)
    }
  }

  max (id: string) {
    if (this.click) {
      this.click('max', id)
    }
  }

  close (id: string) {
    if (this.click) {
      this.click('close', id)
    }
  }

  // 接收的值
  private _fields: FormlyFieldConfig[] = [];
  code: string = '';
  form = new FormGroup({});
  field: FormlyFieldConfig[] = []

  @Input() set fields(value: FormlyFieldConfig[]) {
    this._fields = value;
    this.setCode(value);
  }

  get fields(): FormlyFieldConfig[] {
    return this._fields;
  }

  setCode (value: FormlyFieldConfig[]) {
    this.code = prettier.format(JSON.stringify(value), {
      parser: "json",
      plugins: [parserBabel],
    });
    this.field = JSON.parse(JSON.stringify(value))
  }

  constructor(
    private cd: ChangeDetectorRef,
  ) {}

  // 编辑器初始化 input => code => field
  editorInitialized($event: any) {
    $event.onDidChangeModelContent(() => {
      try {
        let codes = $event.getValue()
        this.field = execEval(codes)
        setTimeout(() => {
          this.cd.markForCheck();
        }, 0);
      } catch (error) {
        this.cd.markForCheck();
      }
    })
  }
}
