import { Component, OnChanges, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[radio-field]',
  template: `
    <label 
      nz-radio 
      [formControl]="control"
      [formlyAttributes]="field"
      (ngModelChange)="ngModelChange($event)"
      ngDefaultControl>
      {{text}}
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})

export class RadioField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzAutoFocus(): boolean {
		return this.props.nzAutoFocus || false;
	}

  get nzDisabled(): boolean {
		return this.props.nzDisabled || false;
	}

	get nzIndeterminate(): boolean {
		return this.props.nzIndeterminate || false
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
