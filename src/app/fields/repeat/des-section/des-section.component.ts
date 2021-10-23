import { Component, OnDestroy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'app-des-section',
  templateUrl: './des-section.component.html'
})

export class NzDesSectionComponent extends FieldArrayType implements OnDestroy {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnDestroy() {
    if (this.field && this.field.fieldGroup) {
      this.field.fieldGroup.map((item, index) => {
        // super.remove(index)
      });
    }
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
}
