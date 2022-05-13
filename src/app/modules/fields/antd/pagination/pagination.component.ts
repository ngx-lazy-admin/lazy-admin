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
		return this.to.nzDisabled || false;
	}

	get showQuickJumper(): boolean {
		return this.to.nzShowQuickJumper || false;
	}

	get showSizeChanger(): boolean {
		return this.to.nzShowSizeChanger || true;
	}

	get simple(): boolean {
		return this.to.nzSimple || false;
	}

	get size(): 'default' | 'small' {
		return this.to.nzSize ||  'default';
	}

	get responsive(): boolean {
		return this.to.nzResponsive || false;
	}

	get pageSizeOptions(): number[] {
		return this.to.nzPageSizeOptions || [10, 20, 30, 40];
	}

	get hideOnSinglePage(): boolean {
		return this.to.nzHideOnSinglePage || false;
	}

	pageChange ($event: any) {
		console.log($event)
	}
}
