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
		return this.to.nzAutoFocus || false;
	}

  get nzDisabled(): boolean {
		return this.to.nzDisabled || false;
	}

	get nzIndeterminate(): boolean {
		return this.to.nzIndeterminate || false
	}

  get text(): string {
    return this.to.text || ''
  }

  ngModelChange ($event: Event) {
    if (this.to.change) {
        this.to.change(this.field, $event)
    }
  }
}
