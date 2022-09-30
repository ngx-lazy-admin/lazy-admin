import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'div[slider-field]',
	template: `
		<nz-slider-range-item
			nzRange 
			[formControl]="control"
			[formlyAttributes]="field"
			[nzDisabled]="nzDisabled"
			(ngModelChange)="ngModelChange($event)"
		>
		</nz-slider-range-item>
	`,
	host: {
		'display': 'contents',
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SliderRangeField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get nzCheckedChildren(): string | TemplateRef<void> | null {
		return this.props.nzBorderless || null
	}

	get nzUnCheckedChildren(): string | TemplateRef<void> | null  {
		return this.props.nzBorderless || null
	}

	get nzDisabled(): boolean {
		return this.props.nzDisabled || false
	}

	get nzSize(): 'small' | 'default' {
		return this.props.nzSize || 'default'
	}

	get nzLoading(): boolean {
		return this.props.nzLoading || false
	}

	get nzControl(): boolean {
		return this.props.nzControl || false
	}

  get nzDots(): boolean {
		return this.props.nzDots || false
	}

  get nzIncluded(): boolean {
		return this.props.nzIncluded || false
	}

  get nzMarks(): boolean {
		return this.props.nzMarks || false
	}

  get nzMax(): boolean {
		return this.props.nzMax || false
	}

  get nzMin(): boolean {
		return this.props.nzMin || false
	}

  get nzRange(): boolean {
		return this.props.nzRange || false
	}

  get nzStep(): boolean {
		return this.props.nzStep || false
	}

  get nzTipFormatter(): boolean {
		return this.props.nzTipFormatter || false
	}

  get nzVertical(): boolean {
		return this.props.nzVertical || false
	}

  get nzReverse(): boolean {
		return this.props.nzReverse || false
	}
  get nzTooltipVisible(): boolean {
		return this.props.nzTooltipVisible || false
	}

  get nzTooltipPlacement(): boolean {
		return this.props.nzTooltipPlacement || false
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