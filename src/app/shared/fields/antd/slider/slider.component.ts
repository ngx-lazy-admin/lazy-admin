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
		return this.props.nzDisabled || false
	}

	get nzDots(): boolean {
		return this.props.nzDots || this.props.dots || false
	}

  get nzIncluded(): boolean {
		return this.props.nzIncluded || this.props.included || false
	}

  get nzMarks(): boolean {
		return this.props.nzMarks || this.props.marks || false
	}

  get nzMax(): boolean {
		return this.props.nzMax || this.props.max || false
	}

  get nzMin(): boolean {
		return this.props.nzMin || this.props.min || false
	}

  get nzRange(): boolean {
		return this.props.nzRange || this.props.range || false
	}

  get nzStep(): boolean {
		return this.props.nzStep || this.props.step || false
	}

  get nzTipFormatter(): boolean {
		return this.props.nzTipFormatter || this.props.tipFormatter  || false
	}

  get nzVertical(): boolean {
		return this.props.nzVertical || this.props.vertical || false
	}

  get nzReverse(): boolean {
		return this.props.nzReverse || this.props.reverse || false
	}
  get nzTooltipVisible(): boolean {
		return this.props.nzTooltipVisible || this.props.tooltipVisible || false
	}

  get nzTooltipPlacement(): boolean {
		return this.props.nzTooltipPlacement || this.props.tooltipPlacement || false
	}

	get style(): Object {
		return this.props.style || {}
	}

	nzOnAfterChange ($event: Event) {
		if (this.props.nzOnAfterChange) {
			this.props.nzOnAfterChange(this.field, $event)
		}
	}

	ngModelChange ($event: Event) {
		if (this.props.change) {
			this.props.change(this.field, $event)
		}
	}
}