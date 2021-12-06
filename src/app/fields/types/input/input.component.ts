import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
	selector: 'div[input-field]',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
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
