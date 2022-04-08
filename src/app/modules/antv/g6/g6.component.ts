import { Component, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'div[g6-field]',
  template: `
    <!-- <g6-field-item
      [formControl]="control"
      [formlyAttributes]="field"
      (ngModelChange)="ngModelChange($event)">
    </g6-field-item> -->
  `,
  encapsulation: ViewEncapsulation.None
})
export class G6Field extends FieldType {

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

