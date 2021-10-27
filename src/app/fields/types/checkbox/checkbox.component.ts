import { Component, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[checkbox-field]',
  template: `
    <label 
      nz-checkbox 
      [formControl]="control"
      [formlyAttributes]="field"
      [nzDisabled]="nzDisabled"
      [nzIndeterminate]="nzIndeterminate"
      (ngModelChange)="ngModelChange($event)"
      ngDefaultControl>
      {{text}}
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckboxField extends FieldType {

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

  get nzBackfill(): boolean {
		return this.to.nzBackfill || false
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
