import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class FormlyFieldTemplateComponent extends FieldType implements OnInit {

  innerHtml = null;

  ngOnInit () {}

  onClick ($event) {
    if (this.to.onClick) {
      this.to.onClick(this.model, $event);
    }
  }
}
