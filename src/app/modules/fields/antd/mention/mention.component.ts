import { Component, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FieldType } from '@ngx-formly/core';
import { execEval, ShareFieldType } from '../share-field.type';

@Component({
	selector: 'div[mention-field]',
	template: `{{nzLoading}}
	<nz-mention 
		[nzSuggestions]="nzSuggestions"
		[nzPlacement]="nzPlacement"
		[nzLoading]="nzLoading"
		(nzOnSelect)="onSelect($event)"
		(nzOnSearchChange)="nzOnSearchChange($event)">
		<input
			placeholder="input here"
			nzMentionTrigger
			nz-input
			[formControl]="control"
			[formlyAttributes]="field"
			(ngModelChange)="change($event)"
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
		return this.to?.nzMentionSuggestion || null
	}

	get nzLoading(): boolean {
		return this.to?.nzLoading ||  this.to?.loading || false
	}

	get nzNotFoundContent(): string {
		return this.to?.nzNotFoundContent || false
	}

	get nzPlacement(): 'bottom' | 'top' {
		return this.to?.nzPlacement || 'bottom'
	}

	get nzPrefix(): string | string[] {
		return this.to?.nzPrefix || false
	}

	get nzSuggestions(): any[] {
		return this.to?.nzSuggestions || this.to?.suggestions || []
	}

	get nzValueWith(): boolean {
		return this.to?.nzValueWith || false
	}

	onSelect ($event: Event) {
		if (this.to.onSelect) {
			this.to.onSelect(this.field, $event)
		}
	}

	nzOnSearchChange ($event: any) {
		// console.log($event)
		// if (this.to.onSearchChange) {
		// 	this.to.onSearchChange(this.field, $event)
		// }
		// this.zone.runOutsideAngular(() => {
    //   try{
    //     if (this.to?.onSearchChange) {
    //       const func = typeof(this.to?.onSearchChange) == 'string' ? execEval(this.to?.onSearchChange) : this.to?.onSearchChange;
    //       func(this.field, this)
    //     }
    //   } catch (err){
    //     console.log(err)
    //   } finally {
    //     console.log('change finally')
    //   }
    // });

		this.runChange(this.field, this, 'onSearchChange')
	}

	onChange ($event: any) {
		console.log($event)
	}
}
