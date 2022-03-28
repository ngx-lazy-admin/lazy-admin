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
			[type]="nzType"
			[placeholder]="nzPlaceholder"
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

	get nzType(): string {
		return this.to.nzType || this.to.type || 'text'
	}

	get nzPlaceholder(): string {
		return this.to.nzPlaceholder || this.to.placeholder || '请输入' 
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }
}
