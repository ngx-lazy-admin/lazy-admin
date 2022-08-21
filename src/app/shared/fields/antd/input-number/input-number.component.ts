import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { execFunc } from '../share-field.type';

@Component({
	selector: 'div[input-number-field]',
	template: `
		<nz-input-number  
			class="w-100"
			[formControl]="control"
			[formlyAttributes]="field"
			[nzMin]="nzMin"
			[nzMax]="nzMax"
			[nzDisabled]="nzDisabled"
			[nzPrecision]="nzPrecision"
			[nzSize]="nzSize"
			[nzPlaceHolder]="nzPlaceHolder"
			[nzFormatter]="nzFormatter"
			[nzParser]="nzParser"
			[nzStep]="nzStep" 
			(ngModelChange)="ngModelChange($event)"
			(nzFocus)="nzFocus($event)"
			(nzBlur)="nzBlur($event)"
			ngDefaultControl
		></nz-input-number>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class InputNumberField extends FieldType {
	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzAutoFocus(): boolean {
		return this.to.nzAutoFocus || this.to.autoFocus || false;
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || this.to.disabled || false;
	}

	get nzMax(): number {
		return this.to.nzMax || this.to.max || Infinity
	}

	get nzMin(): number {
		return this.to.nzMin || this.to.min || -Infinity
	}

	private _formatter: (value: number) => string | number = value => value;

	get nzFormatter() {
		return this.to.nzFormatter && execFunc(this.to.nzFormatter) || this._formatter;
	}

	private  _parser = (value: string) => value.trim().replace(/。/g, '.').replace(/[^\w\.-]+/g, '');

	get nzParser(): (value: string) => string {
		return this.to.nzParser || execFunc(this.to.parser) || this._parser
	}

	get nzPrecision(): number {
		return this.to.nzPrecision || this.to.precision || null
	}

	get nzPrecisionMode(): number {
		return this.to.nzPrecisionMode || this.to.precisionMode || 'toFixed'
	}

	get nzSize(): NzSizeLDSType {
		return this.to.nzSize || this.to.size || 'default'
	}

	get nzStep(): number {
		return this.to.nzStep || this.to.step || 1
	}

	get nzPlaceHolder(): string {
		return this.to.nzPlaceHolder || this.to.placeHolder || ''
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
