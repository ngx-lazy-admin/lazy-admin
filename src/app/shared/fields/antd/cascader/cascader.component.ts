import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'div[cascader-field]',
  template: `
  <nz-cascader
    [formControl]="control"
    [formlyAttributes]="field"
    [nzOptions]="nzOptions"
    [nzSize]="nzSize" 
    (ngModelChange)="ngModelChange($event)">
  </nz-cascader>

  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    return this.to['nzOptions'] || this.props.options || [];
  }

  get nzSize (): 'large'|'small'|'default' {
    return this.props.nzSize || this.to['size'] || 'default'
  }

  ngModelChange ($event: Event) {
    if (this.props.change) {
      this.props.change(this.field, $event);
    }
  }
}
