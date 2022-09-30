import { Component, ChangeDetectionStrategy, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeDSType, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { ShareFieldType } from '../share-field.type';
import { marked } from 'marked';

@Component({
	selector: 'div[typography-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
	},
	template: `{{nzEllipsis}} {{nzEllipsisRows}}
		<div nz-typography
			[nzSuffix]="nzSuffix"
			[nzEllipsisRows]="nzEllipsisRows"
			[nzEllipsis]="nzEllipsis"
			[nzExpandable]="nzExpandable"
			style="word-break: break-word;white-space: normal;"
			(nzExpandChange)="expandChange(false)"
		>

		</div>
		<div [innerHTML]="this.formControl.value | marked"></div>
		<a style="color:red" (click)="expandChange(true)">收起</a>
	`
})
export class TypographyField extends ShareFieldType {

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get nzControl(): boolean {
		return this.props.nzControl || this.props.control || false
	}

	get nzSuffix(): string {
		return this.props.nzSuffix || this.props.suffix || ''
	}

	get nzExpandable(): boolean {
		return this.props.nzExpandable || this.props.expandable || false
	}

	// get nzEllipsisRows(): number {
	// 	return this.props.nzEllipsisRows || this.props.ellipsisRows || 1
	// }

	nzEllipsisRows = 1

	nzEllipsis = true
	// get nzEllipsis(): boolean {
	// 	return this.props.nzEllipsis || this.props.ellipsis || false
	// }
	
	expandChange (expand: any) {
		console.log(expand)
		// this.nzEllipsisRows =  ? 1 : 999
		this.nzEllipsis = !this.nzEllipsis
	}

	ngModelChange ($event: Event) {
		if (this.props.change) {
			this.props.change(this.field, $event)
		}
	}
}