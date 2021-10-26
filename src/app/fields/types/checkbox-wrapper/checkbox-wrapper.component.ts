import { Component, OnChanges, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'div[checkbox-wrapper-field]',
  templateUrl: './checkbox-wrapper.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CheckboxWrapperField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzAutoFocus(): boolean {
		return this.to.nzAutoFocus || false;
	}

  get nzDisabled(): boolean {
		return this.to.nzDisabled || false;
	}

	get nzIndeterminate(): boolean {
		return this.to.nzIndeterminate || false
	}

  get nzBackfill(): boolean {
		return this.to.nzBackfill || false
	}

  get text(): string {
    return this.to.text || ''
  }

  get data(): any[] {
    if (!this._data) {
      this._data = this.to.options as any[]
    }
    return this._data;
  }

  set data (value: any[]) {
    this._data = value
  }

  private _destroy$ = new Subject<void>();
  private _data: any[] | null = null;

  // constructor(
  //   private cd: ChangeDetectorRef,
  // ) {
  //   super()
  // }

  ngOnInit(): void {
    this.field.formControl?.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(value => {
      if (value && value instanceof Array) {
        this._data = this.data.map(item => {
          return {
            ...item,
            checked: value.some((v: any) => v === item.value)
          }
        })
      }
    })
  }

  nzOnChange ($event: any) {
    // this.field.formControl?.setValue($event)
    if (this.to.change) {
        this.to.change(this.field, $event)
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
