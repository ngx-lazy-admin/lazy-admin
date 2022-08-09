import { Component, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'div[ngx-quill-field]',
  template: `
    <quill-edit-field
      [formControl]="control"
      [formlyAttributes]="field"
      (ngModelChange)="ngModelChange($event)">
    </quill-edit-field>
    {{this.formControl.value}}
  `,
  encapsulation: ViewEncapsulation.None
})
export class QuillField extends FieldType {

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
  ) {
    super();
  }

  get control() : FormControl {
		return this.formControl as FormControl
  }

  ngModelChange ($event: any) {
    console.log($event)
  }
}

