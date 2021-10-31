import { Component, OnChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormControl } from '@angular/forms';

import { FieldType } from '@ngx-formly/core';
import { NzDatePickerSizeType } from 'ng-zorro-antd/date-picker';




@Component({
  selector: 'div[date-picker-field]',
  templateUrl: './date-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerField extends FieldType {
  constructor() {
    super();
  }

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzId (): string {
    return this.to.nzId || '';
  }

  get nzAllowClear (): boolean {
    return this.to.nzAllowClear || true;
  }

  get nzAutoFocus (): boolean{
    return this.to.nzAutoFocus || false
  }

  get nzBackrop (): false {
    return this.to.nzBackrop || false;
  }

  get nzDefaultPickerValue(): Date {
    return this.to.nzDefaultPickerValue 
  }

  get nzDisabled(): boolean {
		return this.to.nzDisabled || false;
	}

  // get nzDisabledDate:  {
  //   return this.to.nzDisabledDate 
  // }

  get nzDropdownClassName() : string {
    return this.to.nzDropdownClassName || ''
  }

  get nzFormat(): string {
    return this.to.nzFormat || ''
  }

  get nzInputReadOnly(): boolean {
    return this.to.nzInputReadOnly || false
  }

  get nzLocale() : object {
    return this.to.nzLocale() || null
  }

  get nzMode(): string {
    return this.to.nzMode || 'week'
  }

  get nzPlaceHolder(): string {
    return this.to.nzPlaceHolder || ''
  }

  get nzPopupStyle(): object {
    return this.to.nzPopupStyle || {}
  }

  get nzRenderExtraFooter (): string {
    return this.to.nzRenderExtraFooter || ''
  }

  get nzSize () : NzDatePickerSizeType {
    return this.to.nzSize || ''
  }
  get nzSuffixIcon() : string {
    return this.to.nzSuffixIcon || ''
  }

  get nzBorderless (): boolean {
    return this.to.nzBorderless || false
  }

  get nzInline (): boolean {
    return this.to.nzInline || false
  }

  // nzOnOpenChange
  onOpenChange ($event: boolean) {
    if (this.to.nzOnOpenChange) {
        this.to.nzOnOpenChange(this.field, $event)
    }
  }
  onModelChange ($event: Event) {
    if (this.to.change) {
        this.to.change(this.field, $event)
    }
  }

  // onOk (date) {}
}
