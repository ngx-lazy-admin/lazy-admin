import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'app-panel-wrapper',
    template: `
      <ng-container>
          <formly-form
              [fields]="field.fieldGroup"
              [isRoot]="false"
              [model]="field.model"
              [form]="field.formControl"
              [options]="options"
              [ngClass]="field.fieldGroupClassName">
              <ng-content></ng-content>
          </formly-form>
      </ng-container>
    `
})
export class FormlyFieldPanelWrapperComponent extends FieldWrapper implements OnInit {
    @ViewChild('fieldComponent', {read: ViewContainerRef})
    fieldComponent: ViewContainerRef;

    ngOnInit() {}
}
