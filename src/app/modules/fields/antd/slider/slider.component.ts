import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'div[slider-field]',
	template: `
		<nz-slider-item
			nzRange 
			[formControl]="control"
			[formlyAttributes]="field"
			[nzDisabled]="nzDisabled"
			(ngModelChange)="ngModelChange($event)"
		>
		</nz-slider-item>
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

	get nzCheckedChildren(): string | TemplateRef<void> | null {
		return this.to.nzBorderless || null
	}

	get nzUnCheckedChildren(): string | TemplateRef<void> | null  {
		return this.to.nzBorderless || null
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || false
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
		return this.to.nzDots || false
	}

  get nzIncluded(): boolean {
		return this.to.nzIncluded || false
	}

  get nzMarks(): boolean {
		return this.to.nzMarks || false
	}

  get nzMax(): boolean {
		return this.to.nzMax || false
	}

  get nzMin(): boolean {
		return this.to.nzMin || false
	}

  get nzRange(): boolean {
		return this.to.nzRange || false
	}

  get nzStep(): boolean {
		return this.to.nzStep || false
	}

  get nzTipFormatter(): boolean {
		return this.to.nzTipFormatter || false
	}

  get nzVertical(): boolean {
		return this.to.nzVertical || false
	}

  get nzReverse(): boolean {
		return this.to.nzReverse || false
	}
  get nzTooltipVisible(): boolean {
		return this.to.nzTooltipVisible || false
	}

  get nzTooltipPlacement(): boolean {
		return this.to.nzTooltipPlacement || false
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