import { Component, Input } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid.component.html',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    'nz-row': 'nz-row'
  }
})

export class FormlyFieldGridComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
}
