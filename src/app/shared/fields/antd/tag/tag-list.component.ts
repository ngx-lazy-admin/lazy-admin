import { Component, OnChanges, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[tag-list-field]',
  template: `
    <ng-container *ngFor="let item of field.formControl?.value">
      <nz-tag 
        [nzMode]="'default'"
        [nzColor]="nzColor"
      >
        {{ item }}
      </nz-tag>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class TagListField extends FieldType {

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

  get nzColor(): string {
    return this.props.nzColor || ''
  }

  ngModelChange ($event: boolean) {
    if (this.props.change) {
      this.props.change(this.field, $event)
    }
  }
}
