import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
	selector: 'div[input-field]',
	styleUrls: ['./input.component.css'],
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
		return this.to.nzBorderless || false
	}

	get nzSize(): NzSizeLDSType {
		return this.to.nzSize || 'default'
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }

	// get type(): string {
	// 	return this.to.type || 'text'
	// }
}
