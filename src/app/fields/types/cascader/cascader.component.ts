import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[cascader-field]',
  templateUrl: './cascader.component.html',
})
export class CascaderField extends FieldType {

  // filter = (i, p) => {
  //   return p.some(o => {
  //     const label = o.label;
  //     return !!label && label.trim().toLowerCase().indexOf(i.trim().toLowerCase()) !== -1;
  //   })
  // }

  constructor(
    private cd: ChangeDetectorRef
  ) {
    super();
  }

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzOptions (): object[] {
    return this.to['nzOptions'] || [];
  }

  ngModelChange ($event: Event) {
    if (this.to.change) {
      this.to.change(this.field, $event);
    }
  }
}
