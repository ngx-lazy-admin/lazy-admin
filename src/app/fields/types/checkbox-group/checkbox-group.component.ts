import { Component, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'div[checkbox-field]',
  templateUrl: './checkbox-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush 
})

export class CheckboxGroupField extends FieldType {

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
