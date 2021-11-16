import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class FormlyFieldTemplateComponent extends FieldType {

  innerHtml = null;

  onClick ($event: Event) {
    if (this.to.onClick) {
      this.to.onClick(this.model, $event);
    }
  }
}
