import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
	selector: 'div[input-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
	template: `
		<input
			nz-input
			[formControl]="control"
			[formlyAttributes]="field"
			[nzSize]="nzSize"
			[nzBorderless]="nzBorderless"
		/>
	`
})
export class InputField extends FieldType {

	get nzBorderless(): boolean {
		return this.to.nzBorderless || this.to.borderless || false
	}

	get nzSize(): NzSizeLDSType {
		return this.to.nzSize || this.to.size || 'default'
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }
}
