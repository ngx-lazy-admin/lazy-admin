import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-title',
  template: `<p *ngIf="model[key]" >{{model[key]}}</p>`
})
export class FormlyFieldTitleComponent extends FieldType implements OnInit {
    ngOnInit () {}
}
