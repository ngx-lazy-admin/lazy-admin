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
		return this.props.nzDisabled || this.props.disabled || false;
	}

	get showQuickJumper(): boolean {
		return this.props.nzShowQuickJumper ||  this.props.showQuickJumper || false;
	}

	get showSizeChanger(): boolean {
		return this.props.nzShowSizeChanger ||  this.props.showSizeChanger || false;
	}

	get simple(): boolean {
		return this.props.nzSimple || this.props.simple || false;
	}

	get size(): 'default' | 'small' {
		return this.props.nzSize || this.props.size ||  'default';
	}

	get responsive(): boolean {
		return this.props.nzResponsive || this.props.responsive || false;
	}

	get pageSizeOptions(): number[] {
		return this.props.nzPageSizeOptions || this.props.pageSizeOptions || [10, 20, 30, 40];
	}

	get hideOnSinglePage(): boolean {
		return this.props.nzHideOnSinglePage || this.props.hideOnSinglePage  || false;
	}

	pageChange ($event: any) {
		console.log($event)
	}
}
