import { Component, ChangeDetectionStrategy, Input, EventEmitter, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';

import { FieldType,  } from '@ngx-formly/core';

import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { execEval } from '../share-field.type';

@Component({
	selector: 'div[time-picker-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
		'[class.display-contents]': `true`,
	},
	template: `
		<nz-time-picker 
			[formControl]="control"
			[formlyAttributes]="field"

			[nzId]="nzId"
			[nzAddOn]="nzAddOn"
			[nzAllowEmpty]="nzAllowEmpty"
			[nzAutoFocus]="nzAutoFocus"
			[nzBackdrop]="nzBackdrop"
			[nzClearText]="nzClearText"
			[nzNowText]="nzNowText"
			[nzOkText]="nzOkText"
			[nzDefaultOpenValue]="nzDefaultOpenValue"
			[nzDisabled]="nzDisabled"
			[nzDisabledHours]="nzDisabledHours"
			[nzDisabledMinutes]="nzDisabledMinutes"
			[nzDisabledSeconds]="nzDisabledSeconds"
			[nzFormat]="nzFormat"
			[nzHideDisabledOptions]="nzHideDisabledOptions"
			[nzHourStep]="nzHourStep"
			[nzMinuteStep]="nzMinuteStep"
			[nzSecondStep]="nzSecondStep"
			[nzSize]="nzSize"
			[nzOpen]="nzOpen"
			[nzPlaceHolder]="nzPlaceHolder"
			[nzPopupClassName]="nzPopupClassName"
			[nzUse12Hours]="nzUse12Hours"
			[nzSuffixIcon]="nzSuffixIcon"

			(ngModelChange)="ngModelChange($event)">
		</nz-time-picker>
	`
})
export class TimePickerField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzId(): 	string {
		return this.props.nzId || this.props.id || ''
	}

	get nzAddOn(): TemplateRef<void> {
		return this.props.nzAddOn || this.props.addOn || ''
	}

	get nzAllowEmpty(): boolean {
		return this.props.nzAllowEmpty || this.props.allowEmpty || false
	}

	get nzAutoFocus(): boolean {
		return this.props.nzAutoFocus || this.props.autoFocus || false
	}

	get nzBackdrop(): boolean {
		return this.props.nzBackdrop || this.props.backdrop || false
	}

	get nzClearText(): string {
		return this.props.nzClearText ||  this.props.clearText || ''
	}

	get nzNowText(): string {
		return this.props.nzNowText || this.props.nowText || ''
	}

	get nzOkText(): string {
		return this.props.nzOkText || this.props.okText || ''
	}

	get nzDefaultOpenValue(): Date {
		return this.props.nzDefaultOpenValue || this.props.defaultOpenValue || null
	}

	get nzDisabled(): boolean {
		return this.props.nzDisabled || this.props.disabled || false
	}

	get nzDisabledHours(): () => number[] {
		return this.props.nzDisabledHours ||  execEval(this.props.disabledHours)  || null
	}

	get nzDisabledMinutes(): () => number[] {
		return this.props.nzDisabledMinutes || execEval(this.props.disabledMinutes) || null
	}

	get nzDisabledSeconds(): (hour: number) => number[] {
		return this.props.nzDisabledSeconds ||  execEval(this.props.disabledSeconds) || null
	}

	get nzFormat(): string {
		return this.props.nzFormat || this.props.format || "HH:mm:ss"
	}

	get nzHideDisabledOptions(): boolean {
		return this.props.nzHideDisabledOptions || this.props.hideDisabledOptions || false
	}

	get nzHourStep(): number {
		return this.props.nzHourStep ||  this.props.hourStep || 1
	}

	get nzMinuteStep(): number {
		return this.props.nzMinuteStep || this.props.minuteStep || 1
	}

	get nzSecondStep(): number {
		return this.props.nzSecondStep || this.props.secondStep || 1
	}

	get nzOpen(): boolean {
		return this.props.nzOpen || this.props.open || false
	}

	get nzPlaceHolder(): string {
		return this.props.nzPlaceHolder || this.props.placeHolder || ''
	}

	get nzPopupClassName(): string {
		return this.props.nzPopupClassName || this.props.popupClassName || ''
	}

	get nzUse12Hours(): boolean {
		return this.props.nzUse12Hours || this.props.use12Hours || false
	}

	get nzSuffixIcon(): string {
		return this.props.nzSuffixIcon || this.props.suffixIcon || ''
	}

	get nzSize(): string {
		return this.props.nzSize || this.props.size || 'default'
	}

	ngModelChange ($event: Date) {
		if (this.props.change) {
			this.props.change(this.field, $event)
		}
	}

	nzOpenChange ($event: Event) {
		if (this.props.nzOpenChange) {
			this.props.nzOpenChange(this.field, $event)
		}
	}
}
