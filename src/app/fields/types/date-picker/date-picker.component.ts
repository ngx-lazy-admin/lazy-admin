import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-formly-field-date-picker-component',
  templateUrl: './date-picker.component.html'
})
export class FormlyFieldDatePickerComponent extends FieldType {
  constructor() {
    super();
  }

  onChange(date) {
    if (date) {
      const nzFormat = this.to['nzFormat'] ? this.to['nzFormat'] : 'yyyy-MM-dd';
      this.model[this.key] = formatDate(date, nzFormat, 'zh-ch');
      this.formControl.setValue(this.model[this.key]);
    }
  }

  onOk (date) {}
}
