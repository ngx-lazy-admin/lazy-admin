import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'div[slider-field]',
	templateUrl: './slider.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'display': 'contents',
	}
})
export class SliderField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get nzCheckedChildren(): string | TemplateRef<void> | null {
		return this.to.nzBorderless || null
	}

	get nzUnCheckedChildren(): string | TemplateRef<void> | null  {
		return this.to.nzBorderless || null
	}

	get nzDisabled(): boolean {
		return this.to.nzBorderless || false
	}

	get nzSize(): 'small' | 'default' {
		return this.to.nzSize || 'default'
	}

	get nzLoading(): boolean {
		return this.to.nzLoading || false
	}

	get nzControl(): boolean {
		return this.to.nzControl || false
	}

    get nzDots(): boolean {
		return this.to.nzControl || false
	}

    get nzIncluded(): boolean {
		return this.to.nzControl || false
	}

    get nzMarks(): boolean {
		return this.to.nzControl || false
	}

    get nzMax(): boolean {
		return this.to.nzControl || false
	}

    get nzMin(): boolean {
		return this.to.nzControl || false
	}

    get nzRange(): boolean {
		return this.to.nzControl || false
	}

    get nzStep(): boolean {
		return this.to.nzControl || false
	}

    get nzTipFormatter(): boolean {
		return this.to.nzControl || false
	}

    get nzVertical(): boolean {
		return this.to.nzControl || false
	}


    get nzReverse(): boolean {
		return this.to.nzControl || false
	}
    get nzTooltipVisible(): boolean {
		return this.to.nzControl || false
	}

    get nzTooltipPlacement(): boolean {
		return this.to.nzControl || false
	}

	nzOnAfterChange ($event: Event) {
		if (this.to.nzOnAfterChange) {
			this.to.nzOnAfterChange(this.field, $event)
		}
	}

	ngModelChange ($event: Event) {
		if (this.to.change) {
			this.to.change(this.field, $event)
		}
	}
}