import { Component, OnChanges, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[tag-field]',
  template: `
    <label
      tag-checkbox
      [formControl]="control"
      [formlyAttributes]="field"
      [nzDisabled]="disabled"
      (nzCheckedChange)="ngModelChange($event)"
    >
      {{ text }}
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class TagField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzAutoFocus(): boolean {
		return this.props.nzAutoFocus || false;
	}

  get disabled(): boolean {
		return this.props.nzDisabled || this.props.disabled || false;
	}

	get nzIndeterminate(): boolean {
		return this.props.nzIndeterminate || false
	}

  get nzBackfill(): boolean {
		return this.props.nzBackfill || false
	}

  get text(): string {
    return this.props.text || ''
  }

  ngModelChange ($event: boolean) {
    if (this.props.change) {
      this.props.change(this.field, $event)
    }
  }
}
