import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
	selector: 'div[switch-field]',
	templateUrl: './switch.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
	}
})
export class SwitchField extends FieldType {

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
		return this.to.nzBorderless || 'default'
	}

	get nzLoading(): boolean {
		return this.to.nzBorderless || false
	}

	get nzControl(): boolean {
		return this.to.nzBorderless || false
	}


	ngModelChange ($event: Event) {
		if (this.to.change) {
				this.to.change(this.field, $event)
		}
	}
}