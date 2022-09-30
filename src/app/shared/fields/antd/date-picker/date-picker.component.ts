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
    return this.props.nzId || '';
  }

  get nzAllowClear (): boolean {
    return this.props.nzAllowClear || true;
  }

  get nzAutoFocus (): boolean{
    return this.props.nzAutoFocus || false
  }

  get nzBackrop (): false {
    return this.props.nzBackrop || false;
  }

  get nzDefaultPickerValue(): Date {
    return this.props.nzDefaultPickerValue 
  }

  get nzDisabled(): boolean {
		return this.props.nzDisabled || false;
	}

  get nzDisabledDate(): (d: Date) => boolean {
    return this.props.nzDisabledDate 
  }

  get nzDropdownClassName() : string {
    return this.props.nzDropdownClassName || ''
  }

  get nzFormat(): string {
    return this.props.nzFormat || 'yyyy-MM-dd'
  }

  get nzInputReadOnly(): boolean {
    return this.props.nzInputReadOnly || false
  }

  get nzLocale(): NzDatePickerI18nInterface {
    return this.props.nzLocale() || null
  }

  get nzMode(): NzDateMode  {
    return this.props.nzMode || this.props.mode || 'date'
  }

  get nzPlaceHolder(): string {
    return this.props.nzPlaceHolder || ''
  }

  get nzPopupStyle(): object {
    return this.props.nzPopupStyle || {}
  }

  get nzRenderExtraFooter (): TemplateRef<any> | string | FunctionProp<TemplateRef<any> | string> {
    return this.props.nzRenderExtraFooter || ''
  }

  get nzSize () : NzDatePickerSizeType {
    return this.props.nzSize || ''
  }
  get nzSuffixIcon() : string {
    return this.props.nzSuffixIcon || ''
  }

  get nzBorderless (): boolean {
    return this.props.nzBorderless || false
  }

  get nzInline (): boolean {
    return this.props.nzInline || false
  }

  // nzOnOpenChange
  onOpenChange ($event: boolean) {
    if (this.props.nzOnOpenChange) {
        this.props.nzOnOpenChange(this.field, $event)
    }
  }

  onModelChange (date: Date) {
    if (this.props.change) {
        this.props.change(this.field, date)
    }

    // 设定默认格式
    if (this.nzFormat) {
      // this.formControl.setValue(formatDate(date, this.nzFormat, 'zh-ch'));
    }
  }
}
