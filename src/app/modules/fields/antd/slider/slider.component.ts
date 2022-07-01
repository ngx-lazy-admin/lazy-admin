import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'div[slider-field]',
	template: `
		<nz-slider 
			[formControl]="control"
			[formlyAttributes]="field"
      [nzDisabled]="nzDisabled"
      [nzVertical]="nzVertical"
			[nzReverse]="nzReverse"
			[ngStyle]="style"
      (ngModelChange)="ngModelChange($event)"
    >
    </nz-slider>
	`,
	host: {
		'display': 'contents',
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class SliderField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get nzDisabled(): boolean {
		return this.to.nzDisabled || false
	}

	get nzDots(): boolean {
		return this.to.nzDots || this.to.dots || false
	}

  get nzIncluded(): boolean {
		return this.to.nzIncluded || this.to.included || false
	}

  get nzMarks(): boolean {
		return this.to.nzMarks || this.to.marks || false
	}

  get nzMax(): boolean {
		return this.to.nzMax || this.to.max || false
	}

  get nzMin(): boolean {
		return this.to.nzMin || this.to.min || false
	}

  get nzRange(): boolean {
		return this.to.nzRange || this.to.range || false
	}

  get nzStep(): boolean {
		return this.to.nzStep || this.to.step || false
	}

  get nzTipFormatter(): boolean {
		return this.to.nzTipFormatter || this.to.tipFormatter  || false
	}

  get nzVertical(): boolean {
		return this.to.nzVertical || this.to.vertical || false
	}

  get nzReverse(): boolean {
		return this.to.nzReverse || this.to.reverse || false
	}
  get nzTooltipVisible(): boolean {
		return this.to.nzTooltipVisible || this.to.tooltipVisible || false
	}

  get nzTooltipPlacement(): boolean {
		return this.to.nzTooltipPlacement || this.to.tooltipPlacement || false
	}

	get style(): Object {
		return this.to.style || {}
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