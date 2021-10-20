import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'div[input-field]',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'display': 'contents',
	}
})
export class InputField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get type () {
		return this.to.type
	}
}
