import { Component, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
})

export class FormlyFieldTableComponent extends FieldArrayType  implements OnDestroy {

  constructor(
    builder: FormlyFormBuilder,
  ) {
    super(builder);
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
  ngOnDestroy() {
    this.field.fieldGroup.map((item, index) => {
      super.remove(index);
    });
  }
}



