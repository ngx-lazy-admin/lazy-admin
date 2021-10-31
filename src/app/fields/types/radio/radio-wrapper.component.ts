import { Component, OnDestroy, ChangeDetectionStrategy,} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs';

export interface NzCheckBoxOptionInterface {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'div[checkbox-wrapper-field]',
  template: `
    <nz-checkbox-wrapper-item
      [formControl]="control"
      [formlyAttributes]="field"
      (ngModelChange)="ngModelChange($event)">
    </nz-checkbox-wrapper-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioWrapperField extends FieldType implements OnDestroy {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzDisabled(): boolean {
		return this.to.nzDisabled || false;
	}

  get nzOptions(): NzCheckBoxOptionInterface[] {
    return this.to.nzOptions || []
  }

  private _destroy$ = new Subject<void>();

  ngModelChange ($event: Event) {
    if (this.to.change) {
        this.to.change(this.field, $event)
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
