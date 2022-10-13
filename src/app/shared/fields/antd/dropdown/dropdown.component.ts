import { Component, OnChanges, OnInit, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
	selector: 'div[pagination-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	template: `
		
	`
})
export class DropdownField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzDisabled (): boolean {
		return this.props.disabled || true;
	}

	get nzPlacement (): boolean {
		return this.props.placement || false;
	}

	get nzTrigger(): boolean {
		return this.props.trigger || false;
	}

	get nzClickHide(): TemplateRef<void> {
		return this.props.clickHide || null;
	}

	get nzVisible (): number {
		return this.props.visible || 5;
	}

	get nzOverlayClassName(): string[] {
		return this.props.overlayClassName || []
	}

	get nzOverlayStyle (): string [] {
		return this.props.overlayStyle || ''
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
