import { Component, OnChanges, OnInit, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
	selector: 'div[pagination-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	template: `
		<pagination-item
			[formControl]="control"
			[formlyAttributes]="field"

			[nzDisabled]="disabled"
			[nzShowQuickJumper]="showQuickJumper"
			[nzShowSizeChanger]="showSizeChanger"
			[nzSimple]="simple"
			[nzSize]="size"
			[nzResponsive]="responsive"
			[nzPageSizeOptions]="pageSizeOptions"
			[nzHideOnSinglePage]="hideOnSinglePage"
			(pageChange)="pageChange($event)"
		></pagination-item>
	`
})
export class PaginationField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
	}

	get disabled(): boolean {
		return this.to.nzDisabled || this.to.disabled || false;
	}

	get showQuickJumper(): boolean {
		return this.to.nzShowQuickJumper ||  this.to.showQuickJumper || false;
	}

	get showSizeChanger(): boolean {
		return this.to.nzShowSizeChanger ||  this.to.showSizeChanger || false;
	}

	get simple(): boolean {
		return this.to.nzSimple || this.to.simple || false;
	}

	get size(): 'default' | 'small' {
		return this.to.nzSize || this.to.size ||  'default';
	}

	get responsive(): boolean {
		return this.to.nzResponsive || this.to.responsive || false;
	}

	get pageSizeOptions(): number[] {
		return this.to.nzPageSizeOptions || this.to.pageSizeOptions || [10, 20, 30, 40];
	}

	get hideOnSinglePage(): boolean {
		return this.to.nzHideOnSinglePage || this.to.hideOnSinglePage  || false;
	}

	pageChange ($event: any) {
		console.log($event)
	}
}
