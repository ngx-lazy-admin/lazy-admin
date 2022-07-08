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
		return this.to?.nzMentionSuggestion || this.to?.mentionSuggestion || null
	}

	get nzLoading(): boolean {
		return this.to?.nzLoading ||  this.to?.loading || false
	}

	get nzNotFoundContent(): string {
		return this.to?.nzNotFoundContent || this.to?.notFoundContent || false
	}

	get nzPlacement(): MentionPlacement {
		return this.to?.nzPlacement || this.to?.placement || 'bottom'
	}

	get nzPrefix(): string | string[] {
		return this.to?.nzPrefix || this.to?.prefix || '@'
	}

	get nzSuggestions(): any[] {
		return this.to?.nzSuggestions || this.to?.suggestions || []
	}

	get nzValueWith(): (value: any) => string { 
		if (this.to?.nzValueWith || this.to?.valueWith) {
			return this.to?.nzValueWith || this.to?.valueWith
		} else {
			return value => value
		}
	}

	get readOnly (): boolean {
		return this.to.readOnly || false
	}

	get placeholder(): string {
		return this.to.placeholder || 'input here'
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
