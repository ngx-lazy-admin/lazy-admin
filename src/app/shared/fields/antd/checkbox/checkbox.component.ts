import { Component, OnChanges, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[checkbox-field]',
  template: `
    <label 
      nz-checkbox 
      [formControl]="control"
      [formlyAttributes]="field"
      [nzDisabled]="nzDisabled"
      [nzIndeterminate]="nzIndeterminate"
      (ngModelChange)="change($event)"
      ngDefaultControl>
      {{text}} {{to.nzDisabled}}
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class CheckboxField extends ShareFieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzAutoFocus(): boolean {
		return this.props.nzAutoFocus || false;
	}

  get nzDisabled(): boolean {
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

  ngModelChange ($event: Event) {
    if (this.props.change) {
        this.props.change(this.field, $event)
    }
  }
}
