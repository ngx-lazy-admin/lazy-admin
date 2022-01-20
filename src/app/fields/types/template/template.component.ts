import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'div[template-field]',
	template: `
		<!-- <ng-container *ngIf="formControl.value">
			<div [innerHTML]="formControl.value | nzSanitizer: 'html'"></div>
		</ng-container>
		<ng-container *ngIf="!formControl.value">
			NA
		</ng-container> -->
		{{formControl.value}}

	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
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
