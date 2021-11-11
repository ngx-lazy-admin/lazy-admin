import { FieldType } from '@ngx-formly/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-select-date-component',
  templateUrl: './select-date.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    ::ng-deep .month-picker .ant-calendar-picker-input {
      color: white;
    }
  `]
})

export class FormlyFieldSelectDateComponent extends FieldType implements OnInit {

    date = null; // new Date();
    dates = []; // new Date();
    type = 2;

    start;
    end;

    startValue: Date | null = null;
    endValue: Date | null = null;
    endOpen = false;

    onChange(result: Date): void {
      const date = formatDate(result, 'yyyyMM', 'zh-Hans');
      if (this.dates.indexOf(date) === -1) {
        this.dates.push(date);
        this.model[this.key] = this.dates.join(',');
        this.formControl.setValue(this.model[this.key]);
      }
    }

    ngOnInit () {
      const value = this.formControl.value;

      if (value && this.dates.join(',') !== value) {
        this.dates = value.split(',');
      }

      this.formControl.valueChanges.subscribe(val => {
        if (val && this.dates.join(',') !== val) {
          this.dates = val.split(',');
        }
      });
    }

    remove (i) {
      this.dates.splice(i, 1);
      this.model[this.key] = this.dates.join(',');
      this.formControl.setValue(this.model[this.key]);
    }

    disabledStartDate = (startValue: Date): Boolean => {
      if (!startValue || !this.endValue) {
        return false;
      }
      return startValue.getTime() > this.endValue.getTime();
    }

    disabledEndDate = (endValue: Date): Boolean => {
      if (!endValue || !this.startValue) {
        return false;
      }
      return endValue.getTime() <= this.startValue.getTime();
    }

    onStartChange(date: Date): void {
      this.startValue = date;
      this.dateChange();
    }

    onEndChange(date: Date): void {
      this.endValue = date;
      this.dateChange();
    }

    dateChange () {
      this.dates = [];
      if (this.startValue && this.endValue) {
        const start =  new Date( formatDate(this.startValue, 'yyyy-MM', 'zh-Hans') );
        const end = new Date( formatDate(this.endValue, 'yyyy-MM', 'zh-Hans'));

        for (; start.getTime() <= end.getTime(); ) {
          this.dates.push(formatDate(start, 'yyyyMM', 'zh-Hans'));
          start.setMonth(start.getMonth() + 1);
        }

        this.model[this.key] = this.dates.join(',');
        this.formControl.setValue(this.model[this.key]);
      } else if (this.startValue && !this.endValue ) {
        this.dates.push(formatDate(this.startValue, 'yyyyMM', 'zh-Hans'));
        this.model[this.key] = this.dates.join(',');
        this.formControl.setValue(this.model[this.key]);
      } else if (!this.startValue && this.endValue) {
        this.dates.push(formatDate(this.endValue, 'yyyyMM', 'zh-Hans'));
        this.model[this.key] = this.dates.join(',');
        this.formControl.setValue(this.model[this.key]);
      } else {
        this.model[this.key] = null;
        this.formControl.setValue(null);
      }
    }
}
