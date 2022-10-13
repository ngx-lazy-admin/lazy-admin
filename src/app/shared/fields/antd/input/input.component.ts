import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType,  } from '@ngx-formly/core';
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
			[type]="nzType"
			[placeholder]="nzPlaceholder"
			[nzSize]="nzSize"
			[nzBorderless]="nzBorderless"
		/>
	`
})
export class InputField extends FieldType {

	get nzBorderless(): boolean {
		return this.props.nzBorderless || this.props.borderless || false
	}

	get nzSize(): NzSizeLDSType {
		return this.props.nzSize || this.props.size || 'default'
	}

	get nzType(): string {
		return this.props.nzType || this.props.type || 'text'
	}

	get disabled(): boolean {
		return this.props.disabled || false
	}

	get nzPlaceholder(): string {
		return this.props.nzPlaceholder || this.props.placeholder || '请输入' 
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }
}
