import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-empty-wrapper',
  templateUrl: './empty-wrapper.component.html',
  styles: [`
    :host nz-form-item.ant-form-item {
        margin-bottom: 0;
    }
  `]
})
export class EmptyWrapperComponent extends FieldWrapper implements OnInit {

  @ViewChild('fieldComponent', {read: ViewContainerRef})

  fieldComponent: ViewContainerRef;

  ngOnInit(): void {}
}
