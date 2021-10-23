import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-form-field-wrapper',
  templateUrl: './formly-field-wrapper.component.html',
  styleUrls: ['./formly-field-wrapper.component.css'],
})

export class FormWrapper extends FieldWrapper {
  @ViewChild('fieldTpl', { read: ViewContainerRef })

  get errorState() {
    return this.showError ? 'error' : '';
  }

  onBtnClick () {
    if (this.to.buttonClick) {
      this.to.buttonClick(this.model, this.options);
    }
  }
}
