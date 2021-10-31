import { Component, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';


@Component({
  selector: 'div[radio-field]',
  template: `
    <nz-radio-group 
      [formControl]="control"
      [formlyAttributes]="field"
      [nzDisabled]="nzDisabled"
      (ngModelChange)="ngModelChange($event)"
      ngDefaultControl>
    </nz-radio-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class RadioGroupField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzDisabled(): boolean {
		return this.to.nzDisabled || false;
	}

  ngModelChange ($event: Event) {
    if (this.to.change) {
        this.to.change(this.field, $event)
    }
  }
}
