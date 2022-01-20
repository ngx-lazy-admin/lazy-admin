import { Component, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

export interface StepsOptionInterface {
  value: any | null;
  description?: string | TemplateRef<void>;
  icon: string | string[] | Set<string> | { [klass: string]: any; }
  status: 'wait' | 'process' | 'finish' | 'error';
  label: string | TemplateRef<void>;
  subtitle: string | TemplateRef<void>;
  disabled?: boolean;
  percentage?: number;
}

@Component({
  selector: 'div[steps-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .ant-form-item-required:before {
        display: inline-block;
        margin-right: 4px;
        color: #ff4d4f;
        font-size: 14px;
        font-family: SimSun,sans-serif;
        line-height: 1;
        content: "*";
      }
    `
  ],
  template: `
    <nz-steps-item 
      [formControl]="control"
	    [formlyAttributes]="field"
      [options]="configOptions"
      [nzProgressDot]="nzProgressDot"
      [readonly]="readonly"
      (nzIndexChange)="nzIndexChange($event)"
      >
        <ng-content></ng-content>
    </nz-steps-item>
  `
})

export class StepsField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl;
  }

	get nzType(): 'default' | 'navigation'{
		return this.to.nzType || 'default';
	}

	get nzDirection(): 'vertical' | 'horizontal' {
		return this.to.nzDirection || 'horizontal';
  }

  get nzLabelPlacement() : 'vertical' | 'horizontal' {
		return this.to.nzBordered || 'horizontal';
  }

  get nzProgressDot() : boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }> {
		return this.to.nzProgressDot || this.to.progressDot || false;
  }

  get nzSize() : 'small' | 'default' {
		return this.to.nzSize || 'default';
  }

  get nzStatus() : 'wait' | 'process' | 'finish' | 'error' {
		return this.to.nzStatus || 'process';
  }

  get nzStartIndex(): number {
    return this.to.nzStartIndex || 0
  }

  get configOptions(): Observable<any[]> {
    if (!(this.to.options instanceof Observable)) {
      return of(this.to.options || []);
    } else {
      return this.to.options
    }
  }

  get readonly(): boolean {
    return this.to.readonly || false
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  nzIndexChange ($event: any) {
    if (this.to.nzIndexChange) {
      this.to.nzIndexChange($event)
    }
  }
}
