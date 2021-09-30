import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-inline-field-wrapper',
  templateUrl: './inline-field-wrapper.component.html',
  styleUrls: ['./inline-field-wrapper.component.css']
})

export class InlineFieldWrapperComponent extends FieldWrapper implements OnInit {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;

  ngOnInit() {}
}
