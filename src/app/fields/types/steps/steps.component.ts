import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldArrayType, FieldType } from '@ngx-formly/core';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

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
		return this.to.nzColumn || false;
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

  get configOptions(): StepsOptionInterface[] {
    return this.to.configOptions || []
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
