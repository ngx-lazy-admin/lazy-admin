import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-radio-component',
    templateUrl: './radio.component.html'
})
export class FormlyFieldRadioComponent extends FieldType {
  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
}
