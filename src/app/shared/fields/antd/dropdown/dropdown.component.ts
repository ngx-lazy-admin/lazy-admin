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
		return this.to.disabled || true;
	}

	get nzPlacement (): boolean {
		return this.to.placement || false;
	}

	get nzTrigger(): boolean {
		return this.to.trigger || false;
	}

	get nzClickHide(): TemplateRef<void> {
		return this.to.clickHide || null;
	}

	get nzVisible (): number {
		return this.to.visible || 5;
	}

	get nzOverlayClassName(): string[] {
		return this.to.overlayClassName || []
	}

	get nzOverlayStyle (): string [] {
		return this.to.overlayStyle || ''
	}

	ngModelChange ($event: Event) {
		if (this.to.change) {
			this.to.change(this.field, $event)
		}
	}

	nzOnBlur ($event: Event) {
		if (this.to.blur) {
			this.to.blur(this.field, $event)
		}
	}

	nzOnFocus ($event: Event) {
		if (this.to.focus) {
			this.to.focus(this.field, $event)
		}
	}

	nzOnHoverChange ($event: number) {
		if (this.to.onHoverChange) {
			this.to.onHoverChange(this.field, $event)
		}
	}

	nzOnKeyDown ($event: Event) {
		if (this.to.onKeyDown) {
			this.to.onKeyDown(this.field, $event)
		}
	}
}
