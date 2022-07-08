import { Component, OnChanges, OnInit, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { formatDate, registerLocaleData } from '@angular/common';
import { FormControl } from '@angular/forms';

import { FieldType } from '@ngx-formly/core';
import { NzDatePickerSizeType, NzDateMode } from 'ng-zorro-antd/date-picker';
import {
  DateHelperService,
  NzDatePickerI18nInterface,
  NzDatePickerLangI18nInterface,
  NzI18nService
} from 'ng-zorro-antd/i18n';


import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

type FunctionProp<T> = (...args: any[]) => T;

@Component({
  selector: 'div[date-picker-field]',
  templateUrl: './date-picker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DatePickerField extends FieldType {
  constructor() {
    super();
  }

  static ngAcceptInputType_nzMode: NzDateMode | NzDateMode[] | string | string[] | null | undefined;

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

  get nzDisabledDate(): (d: Date) => boolean {
    return this.to.nzDisabledDate 
  }

  get nzDropdownClassName() : string {
    return this.to.nzDropdownClassName || ''
  }

  get nzFormat(): string {
    return this.to.nzFormat || 'yyyy-MM-dd'
  }

  get nzInputReadOnly(): boolean {
    return this.to.nzInputReadOnly || false
  }

  get nzLocale(): NzDatePickerI18nInterface {
    return this.to.nzLocale() || null
  }

  get nzMode(): NzDateMode  {
    return this.to.nzMode || this.to.mode || 'date'
  }

  get nzPlaceHolder(): string {
    return this.to.nzPlaceHolder || ''
  }

  get nzPopupStyle(): object {
    return this.to.nzPopupStyle || {}
  }

  get nzRenderExtraFooter (): TemplateRef<any> | string | FunctionProp<TemplateRef<any> | string> {
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

  onModelChange (date: Date) {
    if (this.to.change) {
        this.to.change(this.field, date)
    }

    // 设定默认格式
    if (this.nzFormat) {
      // this.formControl.setValue(formatDate(date, this.nzFormat, 'zh-ch'));
    }
  }
}
