
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

    <ng-container *ngIf="fields && fields.length">
      <form [formGroup]="form" class="col-6 w-50">
        <formly-form 
          class="row " 
          [form]="form" 
          [fields]="fields" 
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

  // @Input() fields?: FormlyFieldConfig[];
  @Input() model?: any;
  @Input() nzTitle?: string | TemplateRef<{}>;
  @Input() modal: any;
  @Input() id: string = '';
  @Input() click?: (type: string, id: any) => void;

  @Output() onMin = new EventEmitter<string>();
  @Output() onMax = new EventEmitter<string>();
  // @Output() click = new EventEmitter<string>();

  form = new FormGroup({});

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

  // code: string = ''

  private _fields: FormlyFieldConfig[] = [];

  @Input() set fields(value: FormlyFieldConfig[]) {
    this._fields = value;
  }

  get fields(): FormlyFieldConfig[] {
    return this._fields;
  }

  get code (): string {
    return prettier.format(JSON.stringify(this._fields), {
      parser: "json",
      plugins: [parserBabel],
    });
  }

  editorInitialized($event: any) {
    $event.onDidChangeModelContent(() => {
      console.log(111)
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

  constructor(
    private cd: ChangeDetectorRef,
  ) {
    // this.code = prettier.format(JSON.stringify(this.fields), {
    //   parser: "json",
    //   plugins: [parserBabel],
    // });
  
  }
}
