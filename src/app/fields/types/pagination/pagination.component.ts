import { Component, OnChanges, OnInit, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
	selector: 'div[pagination-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	template: `
		<nz-pagination [nzPageIndex]="1" [nzTotal]="50"></nz-pagination>
	`
})
export class PaginationField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzAllowClear (): boolean {
		return this.to.nzAllowClear || true;
	}

	get nzAllowHalf (): boolean {
		return this.to.nzAllowHalf || false;
	}

	get nzAutoFocus(): boolean {
		return this.to.nzAutoFocus || false;
	}

	get nzCharacter(): TemplateRef<void> {
		return this.to.nzCharacter || null;
	}

	get nzCount (): number {
		return this.to.nzCount || 5;
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || false;
	}

	get nzTooltips(): string[] {
		return this.to.nzTooltips || []
	}

	get text (): string [] {
		return this.to.text || ''
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
