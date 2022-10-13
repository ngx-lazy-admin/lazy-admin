import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeDSType, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { ShareFieldType } from '../share-field.type';

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
			[nzLoading]="nzLoading"
			[nzDisabled]="nzDisabled"
			[nzControl]="nzControl"
			[nzSize]="nzSize"
			(click)="change()"
		></nz-switch>
	`
})
export class SwitchField extends ShareFieldType {

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get nzCheckedChildren(): string | TemplateRef<void> | null {
		return this.props.nzCheckedChildren || this.props.checkedChildren || null
	}

	get nzUnCheckedChildren(): string | TemplateRef<void> | null  {
		return this.props.nzUnCheckedChildren || this.props.unCheckedChildren || null
	}

	get nzDisabled(): boolean {
		return this.props.nzDisabled || this.props.disabled || false
	}

	get nzSize(): NzSizeDSType {
		return this.props.nzSize || this.props.size || 'default'
	}

	get nzLoading(): boolean {
		return this.props.nzLoading || this.props.loading || false
	}

	get nzControl(): boolean {
		return this.props.nzControl || this.props.control || false
	}

	ngModelChange ($event: Event) {
		if (this.props.change) {
			this.props.change(this.field, $event)
		}
	}
}