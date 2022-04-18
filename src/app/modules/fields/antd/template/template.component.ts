import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'div[template-field]',
	template: `
		<span [style]="style">{{formControl.value}}</span>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TemplateField extends FieldType {

  private destroy$ = new Subject();

	get style(): Object {
		return this.to.style || {};
	}

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
