import { Component, ChangeDetectionStrategy,
	Input, Self, Optional, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { NgControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';


@Component({
	selector: 'div[input-group-field]',
	templateUrl: './input-group.component.html',
	styleUrls: ['./input-group.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
	}
})
export class InputGroupField extends FieldType {

	@Input()
	@InputBoolean()
	get nzBorderless(): boolean {
		return this.to.nzBorderless || false
	}

	@Input()
	get nzSize(): NzSizeLDSType {
		return this.to.nzSize || 'default'
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get type(): string {
		return this.to.type || 'text'
	}
}
