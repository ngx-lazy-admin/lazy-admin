import { Component, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MentionPlacement } from 'ng-zorro-antd/mention';
import { ShareFieldType } from '../share-field.type';

@Component({
	selector: 'div[mention-field]',
	template: `
		<nz-mention 
			[nzSuggestions]="nzSuggestions"
			[nzPlacement]="nzPlacement"
			[nzLoading]="nzLoading"
			[nzPrefix]="nzPrefix"
			[nzValueWith]="nzValueWith"
			(nzOnSelect)="nzOnSelect($event)"
			(nzOnSearchChange)="nzOnSearchChange($event)">
			<input
				nz-input
				nzMentionTrigger
			
				[formControl]="control"
				[formlyAttributes]="field"
				[nzBorderless]="true"
				[placeholder]="placeholder"	
				[readOnly]="readOnly"

				(ngModelChange)="ngModelChange($event)"
			/>
		</nz-mention>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class MentionField extends ShareFieldType {
	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzMentionTrigger(): HTMLTextAreaElement | HTMLInputElement | null	 {
		return null
	}

	get nzMentionSuggestion(): TemplateRef<any> | null {
		return this.props?.nzMentionSuggestion || this.props?.mentionSuggestion || null
	}

	get nzLoading(): boolean {
		return this.props?.nzLoading ||  this.props?.loading || false
	}

	get nzNotFoundContent(): string {
		return this.props?.nzNotFoundContent || this.props?.notFoundContent || false
	}

	get nzPlacement(): MentionPlacement {
		return this.props?.nzPlacement || this.props?.placement || 'bottom'
	}

	get nzPrefix(): string | string[] {
		return this.props?.nzPrefix || this.props?.prefix || '@'
	}

	get nzSuggestions(): any[] {
		return this.props?.nzSuggestions || this.props?.suggestions || []
	}

	get nzValueWith(): (value: any) => string { 
		if (this.props?.nzValueWith || this.props?.valueWith) {
			return this.props?.nzValueWith || this.props?.valueWith
		} else {
			return value => value
		}
	}

	get readOnly (): boolean {
		return this.props.readOnly || false
	}

	get placeholder(): string {
		return this.props.placeholder || 'input here'
	}

	nzOnSelect ($event: Event) {
		this.runChange(this.field, this, 'nzOnSelect', $event)
	}

	nzOnSearchChange ($event: any) {
		this.runChange(this.field, this, 'onSearchChange', $event)
	}

	ngModelChange ($event: any) {
		this.runChange(this.field, this, 'modelChange', $event)
	}
}
