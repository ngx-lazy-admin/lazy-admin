import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
	selector: 'div[input-number-field]',
	templateUrl: './input-number.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class InputNumberField extends FieldType {
	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzAutoFocus(): boolean {
		return this.to.nzAutoFocus || false;
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || false;
	}

	get nzMax(): number {
		return this.to.nzMax || Infinity
	}

	get nzMin(): number {
		return this.to.nzMin || -Infinity
	}

	private _formatter: (value: number) => string | number = value => value;

	get nzFormatter() {
		return this.to.nzFormatter || this._formatter;
	}

	private  _parser = (value: string) => value.trim().replace(/。/g, '.').replace(/[^\w\.-]+/g, '');

	get nzParser(): (value: string) => string {
		return this.to.nzParser || this._parser
	}

	get nzPrecision(): number {
		return this.to.nzPrecision || null
	}

	get nzPrecisionMode(): number {
		return this.to.nzPrecisionMode || 'toFixed'
	}

	get nzSize(): NzSizeLDSType {
		return this.to.nzSize || 'default'
	}

	get nzStep(): number {
		return this.to.nzStep || 1
	}

	get nzPlaceHolder(): string {
		return this.to.nzInputMode || ''
	}

	get nzId(): string {
		return this.to.nzId || ''
	}

	ngModelChange ($event: Event) {
		if (this.to.change) {
			this.to.change(this.field, $event)
		}
	}

	nzFocus ($event: Event) {
		if (this.to.focus) {
			this.to.focus(this.field, $event)
		}
	}

	nzBlur ($event: Event) {
		if (this.to.blur) {
			this.to.blur(this.field, $event)
		}
	}
}
