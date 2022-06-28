import { Component, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'div[segmented-field]',
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
    <nz-segmented
      [formControl]="control"
			[formlyAttributes]="field"
      [nzBlock]="nzBlock"
      [nzDisabled]="nzDisabled"
      [nzOptions]="nzOptions"
      [nzSize]="nzSize"

      (nzValueChange)="valueChange($event)">
    </nz-segmented>
  `
})

export class SegmentedField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl;
  }

	get nzBlock(): boolean {
		return this.to.nzBlock || this.to.block || false;
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || this.to.disabled || false;
  }

  get nzSize() : 'small' | 'default' | 'large' {
		return this.to.nzSize || 'default';
  }

  get nzOptions () : string[] | number[] | Array<{ label: string; value: string | number; icon: string; disabled?: boolean; useTemplate?: boolean }> {
    return this.to.nzOptions || this.to.options || []
  }

  get readonly(): boolean {
    return this.to.readonly || false
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  valueChange ($event: any) {
    if (this.to.valueChange) {
      this.to.valueChange($event)
    }
  }
}
