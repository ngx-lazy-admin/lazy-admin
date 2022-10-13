import { Component, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { StepsOptionInterface } from './steps.type';

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
      [nzOptions]="nzOptions"
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
		return this.props.nzType || 'default';
	}

	get nzDirection(): 'vertical' | 'horizontal' {
		return this.props.nzDirection || 'horizontal';
  }

  get nzLabelPlacement() : 'vertical' | 'horizontal' {
		return this.props.nzBordered || 'horizontal';
  }

  get nzProgressDot() : boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }> {
		return this.props.nzProgressDot || this.props.progressDot || false;
  }

  get nzSize() : 'small' | 'default' {
		return this.props.nzSize || 'default';
  }

  get nzStatus() : 'wait' | 'process' | 'finish' | 'error' {
		return this.props.nzStatus || 'process';
  }

  get nzStartIndex(): number {
    return this.props.nzStartIndex || 0
  }

  get nzOptions () : StepsOptionInterface[] {
    return this.props.nzOptions || this.props.options || []
  }

  get readonly(): boolean {
    return this.props.readonly || false
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  nzIndexChange ($event: any) {
    if (this.props.nzIndexChange) {
      this.props.nzIndexChange($event)
    }
  }
}
