import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { formatDate } from '@angular/common';
import * as moment from 'moment';

moment.locale('zh-CN');

@Component({
    selector: 'app-date-range-picker-component',
    templateUrl: './date-range-picker.component.html'
})
export class FormlyFieldDateRangePickerComponent extends FieldType implements OnInit {
  rangeDate;

  ngOnInit () {
    const dates = [];

    if (this.formControl.value && this.formControl.value.length === 2) {
      dates[0] = moment(this.formControl.value[0]).startOf('day').format('YYYY-MM-DD');
      dates[1] = moment(this.formControl.value[1]).endOf('day').format('YYYY-MM-DD');
      this.rangeDate = dates;
    }
  }

  modelChange (dates) {
    if (dates && dates.length === 2) {
      const format = this.to['nzFormat'] ? this.to['nzFormat'] : 'yyyy-MM-dd';
      const date = dates.map(d => formatDate(d, format, 'zh-Hans', 'CCT'));
      this.formControl.patchValue(date);
    }
  }
}
