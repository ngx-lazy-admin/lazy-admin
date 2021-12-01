import { Component, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[tag-field]',
  template: `
    <nz-tag-checkbox
      [formControl]="control"
      [formlyAttributes]="field"
      [nzDisabled]="disabled"
      (nzCheckedChange)="ngModelChange($event)"
    >
      {{ text }}
    </nz-tag-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TagField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzAutoFocus(): boolean {
		return this.to.nzAutoFocus || false;
	}

  get disabled(): boolean {
		return this.to.nzDisabled || this.to.disabled || false;
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

  ngModelChange ($event: boolean) {
    console.log($event)
    if (this.to.change) {
      this.to.change(this.field, $event)
    }
  }
}
