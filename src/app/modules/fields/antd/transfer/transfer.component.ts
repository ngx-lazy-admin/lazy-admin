import { Component, ChangeDetectionStrategy, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { formatDate } from '@angular/common';

@Component({
	selector: 'div[time-picker-field]',
	// templateUrl: './transfer.component.html',
	template: `
	<nz-transfer
		[nzDataSource]="list"
		[nzDisabled]="nzDisabled"
		[nzTitles]="['Source', 'Target']"
		(nzSelectChange)="selectChange($event)"
		[nzSelectedKeys]="['0', '2']"
		(nzChange)="change($event)">
	</nz-transfer>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
		'[class.display-contents]': `true`,
	}
})
export class TransferField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzId(): boolean {
		return this.to.nzId || false
	}

	get nzAddOn(): boolean {
		return this.to.nzAddOn || false
	}

	get nzAllowEmpty(): boolean {
		return this.to.nzAllowEmpty || false
	}

	get nzAutoFocus(): boolean {
		return this.to.nzAutoFocus || false
	}

	get nzBackdrop(): boolean {
		return this.to.nzBackdrop || false
	}

	get nzClearText(): boolean {
		return this.to.nzClearText || false
	}

	get nzNowText(): boolean {
		return this.to.nzNowText || false
	}

	get nzOkText(): boolean {
		return this.to.nzOkText || false
	}

	get nzDefaultOpenValue(): Date {
		return this.to.nzDefaultOpenValue || null
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || false
	}

	get nzDisabledHours(): boolean {
		return this.to.nzDisabledHours || false
	}

	get nzDisabledMinutes(): boolean {
		return this.to.nzDisabledMinutes || false
	}

	get nzDisabledSeconds(): boolean {
		return this.to.nzDisabledSeconds || false
	}

	get nzFormat(): string {
		return this.to.nzFormat || ''
	}

	get nzHideDisabledOptions(): boolean {
		return this.to.nzHideDisabledOptions || false
	}

	get nzHourStep(): boolean {
		return this.to.nzHourStep || false
	}

	get nzMinuteStep(): boolean {
		return this.to.nzMinuteStep || false
	}

	get nzSecondStep(): boolean {
		return this.to.nzSecondStep || false
	}

	get nzOpen(): boolean {
		return this.to.nzOpen || false
	}

	get nzPlaceHolder(): boolean {
		return this.to.nzPlaceHolder || false
	}

	get nzPopupClassName(): boolean {
		return this.to.nzPopupClassName || false
	}

	get nzUse12Hours(): boolean {
		return this.to.nzUse12Hours || false
	}

	get nzSuffixIcon(): boolean {
		return this.to.nzSuffixIcon || false
	}

	selectChange ($event: any) {
		console.log($event)
		console.log('selectChange')
	}

	change ($event: any) {
		console.log($event)
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
