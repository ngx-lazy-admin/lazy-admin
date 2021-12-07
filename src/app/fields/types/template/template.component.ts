import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'div[template-field]',
	template: `
		<div [innerHTML]="formControl.value | nzSanitizer: 'html'"></div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateField extends FieldType {

  private destroy$ = new Subject();

	constructor(
    private cd: ChangeDetectorRef,
	) {
		super()
	}

	ngAfterViewInit(): void {
		this.formControl.valueChanges
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.cd.markForCheck();
			});
	}

	ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
