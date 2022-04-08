import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-date-range-picker-component',
  templateUrl: './date-range-picker.component.html'
})
export class FormlyFieldDateRangePickerComponent extends FieldType implements OnInit {

  ngOnInit () {

  }

  modelChange (dates: Date) {
    console.log(dates)
  }
}
