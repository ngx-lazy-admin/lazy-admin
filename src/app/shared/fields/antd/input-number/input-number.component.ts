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
		return this.props.nzAutoFocus || this.props.autoFocus || false;
	}

	get nzDisabled(): boolean {
		return this.props.nzDisabled || this.props.disabled || false;
	}

	get nzMax(): number {
		return this.props.nzMax || this.props.max || Infinity
	}

	get nzMin(): number {
		return this.props.nzMin || this.props.min || -Infinity
	}

	private _formatter: (value: number) => string | number = value => value;

	get nzFormatter() {
		return this.props.nzFormatter && execFunc(this.props.nzFormatter) || this._formatter;
	}

	private  _parser = (value: string) => value.trim().replace(/。/g, '.').replace(/[^\w\.-]+/g, '');

	get nzParser(): (value: string) => string {
		return this.props.nzParser || execFunc(this.props.parser) || this._parser
	}

	get nzPrecision(): number {
		return this.props.nzPrecision || this.props.precision || null
	}

	get nzPrecisionMode(): number {
		return this.props.nzPrecisionMode || this.props.precisionMode || 'toFixed'
	}

	get nzSize(): NzSizeLDSType {
		return this.props.nzSize || this.props.size || 'default'
	}

	get nzStep(): number {
		return this.props.nzStep || this.props.step || 1
	}

	get nzPlaceHolder(): string {
		return this.props.nzPlaceHolder || this.props.placeHolder || ''
	}

	get nzId(): string {
		return this.props.nzId || ''
	}

	ngModelChange ($event: Event) {
		if (this.props.change) {
			this.props.change(this.field, $event)
		}
	}

	nzFocus ($event: Event) {
		if (this.props.focus) {
			this.props.focus(this.field, $event)
		}
	}

	nzBlur ($event: Event) {
		if (this.props.blur) {
			this.props.blur(this.field, $event)
		}
	}
}
