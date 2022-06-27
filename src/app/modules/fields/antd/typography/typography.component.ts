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
		return this.to.nzControl || this.to.control || false
	}

	get nzSuffix(): string {
		return this.to.nzSuffix || this.to.suffix || ''
	}

	get nzExpandable(): boolean {
		return this.to.nzExpandable || this.to.expandable || false
	}

	// get nzEllipsisRows(): number {
	// 	return this.to.nzEllipsisRows || this.to.ellipsisRows || 1
	// }

	nzEllipsisRows = 1

	nzEllipsis = true
	// get nzEllipsis(): boolean {
	// 	return this.to.nzEllipsis || this.to.ellipsis || false
	// }
	
	expandChange (expand: any) {
		console.log(expand)
		// this.nzEllipsisRows =  ? 1 : 999
		this.nzEllipsis = !this.nzEllipsis
	}

	ngModelChange ($event: Event) {
		if (this.to.change) {
			this.to.change(this.field, $event)
		}
	}
}