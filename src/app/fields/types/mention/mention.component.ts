import { Component, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

@Component({
	selector: 'div[mention-field]',
	templateUrl: './mention.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class MentionField extends FieldType {
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
		return this.to?.nzLoading || false
	}

	get nzNotFoundContent(): boolean {
		return this.to?.nzNotFoundContent || false
	}

	get nzPlacement(): boolean {
		return this.to?.nzPlacement || false
	}

	get nzPrefix(): boolean {
		return this.to?.nzPrefix || false
	}

	get nzSuggestions(): boolean {
		return this.to?.nzSuggestions || false
	}

	get nzValueWith(): boolean {
		return this.to?.nzValueWith || false
	}

	nzOnSelect ($event: Event) {
		if (this.to.nzOnSelect) {
			this.to.nzOnSelect(this.field, $event)
		}
	}

	nzOnSearchChange ($event: Event) {
		if (this.to.nzOnSearchChange) {
			this.to.nzOnSearchChange(this.field, $event)
		}
	}
}
