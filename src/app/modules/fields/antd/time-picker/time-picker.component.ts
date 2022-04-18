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
		return this.to.nzId || this.to.id || ''
	}

	get nzAddOn(): TemplateRef<void> {
		return this.to.nzAddOn || this.to.addOn || ''
	}

	get nzAllowEmpty(): boolean {
		return this.to.nzAllowEmpty || this.to.allowEmpty || false
	}

	get nzAutoFocus(): boolean {
		return this.to.nzAutoFocus || this.to.autoFocus || false
	}

	get nzBackdrop(): boolean {
		return this.to.nzBackdrop || this.to.backdrop || false
	}

	get nzClearText(): string {
		return this.to.nzClearText ||  this.to.clearText || ''
	}

	get nzNowText(): string {
		return this.to.nzNowText || this.to.nowText || ''
	}

	get nzOkText(): string {
		return this.to.nzOkText || this.to.okText || ''
	}

	get nzDefaultOpenValue(): Date {
		return this.to.nzDefaultOpenValue || this.to.defaultOpenValue || null
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || this.to.disabled || false
	}

	get nzDisabledHours(): () => number[] {
		return this.to.nzDisabledHours ||  execEval(this.to.disabledHours)  || null
	}

	get nzDisabledMinutes(): () => number[] {
		return this.to.nzDisabledMinutes || execEval(this.to.disabledMinutes) || null
	}

	get nzDisabledSeconds(): (hour: number) => number[] {
		return this.to.nzDisabledSeconds ||  execEval(this.to.disabledSeconds) || null
	}

	get nzFormat(): string {
		return this.to.nzFormat || this.to.format || "HH:mm:ss"
	}

	get nzHideDisabledOptions(): boolean {
		return this.to.nzHideDisabledOptions || this.to.hideDisabledOptions || false
	}

	get nzHourStep(): number {
		return this.to.nzHourStep ||  this.to.hourStep || 1
	}

	get nzMinuteStep(): number {
		return this.to.nzMinuteStep || this.to.minuteStep || 1
	}

	get nzSecondStep(): number {
		return this.to.nzSecondStep || this.to.secondStep || 1
	}

	get nzOpen(): boolean {
		return this.to.nzOpen || this.to.open || false
	}

	get nzPlaceHolder(): string {
		return this.to.nzPlaceHolder || this.to.placeHolder || ''
	}

	get nzPopupClassName(): string {
		return this.to.nzPopupClassName || this.to.popupClassName || ''
	}

	get nzUse12Hours(): boolean {
		return this.to.nzUse12Hours || this.to.use12Hours || false
	}

	get nzSuffixIcon(): string {
		return this.to.nzSuffixIcon || this.to.suffixIcon || ''
	}

	get nzSize(): string {
		return this.to.nzSize || this.to.size || 'default'
	}

	ngModelChange ($event: Date) {
		if (this.to.change) {
			this.to.change(this.field, $event)
		}
	}

	nzOpenChange ($event: Event) {
		if (this.to.nzOpenChange) {
			this.to.nzOpenChange(this.field, $event)
		}
	}
}
