import { Component, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'div[tui-editor-field]',
  template: `
    <tui-editor-item
      [formControl]="control"
      [formlyAttributes]="field"
      [config]="config"
      (ngModelChange)="ngModelChange($event)">
    </tui-editor-item>
  `,
  encapsulation: ViewEncapsulation.None
})
export class TuiEditorField extends FieldType {

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
  ) {
    super();
  }

  get control(): FormControl {
		return this.formControl as FormControl
  }

  get config(): any {
		return this.props.config
  }

  ngModelChange ($event: any) {
    console.log($event)
  }
}

