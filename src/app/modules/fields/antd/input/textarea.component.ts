import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType,  } from '@ngx-formly/core';
import { NzSizeLDSType,  } from 'ng-zorro-antd/core/types';

export interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}

@Component({
	selector: 'div[textarea-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
	},
	template: `
		<textarea
			nz-input
			[formControl]="control"
			[rows]="rows"
			[formlyAttributes]="field"
			[nzSize]="nzSize"
			[nzBorderless]="nzBorderless"
			[nzAutosize]="nzAutosize"
			[placeholder]="placeholder"
		></textarea>

	`
})
export class TextareaField extends FieldType {

	get nzBorderless(): boolean {
		return this.to.nzBorderless || false
	}

	get nzSize(): NzSizeLDSType {
		return this.to.nzSize || 'default'
	}

	get placeholder(): string {
		return this.to.placeholder || ''
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get type(): string {
		return this.to.type || 'text';
	}

	get rows(): number {
		return this.to.rows || 3
	}

	get nzAutosize(): boolean | AutoSizeType {
		return this.to.nzAutosize || this.to.autosize || false
	}

	get nzMaxCharacterCount(): number {
		return this.to.nzMaxCharacterCount || this.to.maxCharacterCount || 100;
	}
}
