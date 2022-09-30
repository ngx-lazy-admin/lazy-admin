import { Component, OnChanges, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[tag-group-field]',
  template: `
    <tag-checkbox-group
      [formControl]="control"
      [formlyAttributes]="field"
      (ngModelChange)="ngModelChange($event)"
      ngDefaultControl>
    </tag-checkbox-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class TagGroupField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzDisabled(): boolean {
		return this.props.nzDisabled || false;
	}

  ngModelChange ($event: Event) {
    if (this.props.change) {
      this.props.change(this.field, $event)
    }
  }
}
