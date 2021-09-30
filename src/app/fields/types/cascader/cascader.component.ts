import { Component, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-cascader-component',
  templateUrl: './cascader.component.html',
  styles  : [`
    .ant-cascader-picker {
        width: 100%;
    }
  `]
})
export class FormlyFieldCascaderComponent extends FieldType implements OnDestroy {

  filter = (i, p) => {
    return p.some(o => {
      const label = o.label;
      return !!label && label.trim().toLowerCase().indexOf(i.trim().toLowerCase()) !== -1;
    })
  }

  constructor( private _cdRef: ChangeDetectorRef ) {
    super();
  }

  get nzOptions () {
    return this.to['nzOptions'] || [];
  }

  modelChange ($event) {
    this.formControl.setValue($event);
  }
}
