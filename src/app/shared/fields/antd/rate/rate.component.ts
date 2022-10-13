import { Component, OnChanges, OnInit, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
	selector: 'div[rate-field]',
	templateUrl: './rate.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class RateField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzAllowClear (): boolean {
		return this.props.nzAllowClear || this.props.allowClear || false;
	}

	get nzAllowHalf (): boolean {
		return this.props.nzAllowHalf || this.props.allowHalf || false;
	}

	get nzAutoFocus(): boolean {
		return this.props.nzAutoFocus || this.props.autoFocus || false;
	}

	get nzCharacter(): TemplateRef<void> {
		return this.props.nzCharacter || null;
	}

	get nzCount (): number {
		return this.props.nzCount || 5;
	}

	get nzDisabled(): boolean {
		return this.props.nzDisabled || false;
	}

	get nzTooltips(): string[] {
		return this.props.nzTooltips || this.props.tooltips || []
	}

	get text (): string [] {
		return this.props.text || ''
	}

	ngModelChange ($event: Event) {
		if (this.props.change) {
			this.props.change(this.field, $event)
		}
	}

	nzOnBlur ($event: Event) {
		if (this.props.blur) {
			this.props.blur(this.field, $event)
		}
	}

	nzOnFocus ($event: Event) {
		if (this.props.focus) {
			this.props.focus(this.field, $event)
		}
	}

	nzOnHoverChange ($event: number) {
		if (this.props.onHoverChange) {
			this.props.onHoverChange(this.field, $event)
		}
	}

	nzOnKeyDown ($event: Event) {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(this.field, $event)
		}
	}
}
