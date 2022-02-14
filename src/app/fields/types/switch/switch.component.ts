import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeDSType, NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
	selector: 'div[switch-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
	},
	template: `
		<nz-switch
			nz-input
			[formControl]="control"
			[formlyAttributes]="field"
			[nzCheckedChildren]="nzCheckedChildren"
			[nzUnCheckedChildren]="nzUnCheckedChildren"

			[nzSize]="nzSize"
		></nz-switch>
	`
})
export class SwitchField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get nzCheckedChildren(): string | TemplateRef<void> | null {
		return this.to.nzCheckedChildren || this.to.checkedChildren || null
	}

	get nzUnCheckedChildren(): string | TemplateRef<void> | null  {
		return this.to.nzUnCheckedChildren || this.to.unCheckedChildren || null
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || this.to.disabled || false
	}

	get nzSize(): NzSizeDSType {
		return this.to.nzSize || this.to.size || 'default'
	}

	get nzLoading(): boolean {
		return this.to.nzLoading || this.to.loading || false
	}

	get nzControl(): boolean {
		return this.to.nzControl || this.to.control || false
	}

	ngModelChange ($event: Event) {
		if (this.to.change) {
				this.to.change(this.field, $event)
		}
	}
}