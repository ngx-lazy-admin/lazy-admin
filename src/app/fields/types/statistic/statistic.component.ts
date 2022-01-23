import { Component, ChangeDetectorRef,  ChangeDetectionStrategy, OnDestroy, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, debounceTime, switchMap, skip, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { 
  NzOptionComponent,
  NzSelectItemInterface,
  NzFilterOptionType,
  NzSelectSizeType,
  NzSelectModeType
} from 'ng-zorro-antd/select';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface NzSelectOptionInterface {
  label: string | number | null ;
  value: NzSafeAny | null;
  disabled?: boolean;
  hide?: boolean;
  groupLabel?: string | number | null;
}


@Component({
  selector: 'div[statistic-field]',
  styles: [
    `nz-select  {
      display: block;
    }`
  ],
  template: `
    <nz-statistic [nzValue]="nzValue" [nzTitle]="nzTitle"></nz-statistic>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})

export class StatisticField extends FieldType implements OnInit,  OnDestroy {

  get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzId () : string{
    return this.to.nzId || '';
  }

  get nzPrefix () : boolean {
    return this.to.nzPrefix || this.to.prefix || true;
  }

  get nzSuffix () : boolean {
    return this.to.nzSuffix || this.to.prefix || true;
  }

  get nzTitle () : string | TemplateRef<void>	 {
    return this.to.nzTitle || this.to.nzTitle || true;
  }

  get nzValueStyle () : boolean {
    return this.to.nzValueStyle || this.to.nzValueStyle || true;
  }

  get nzValue () : string | number {
    return this.formControl.value || true;
  }

  ngModelChange ($event: Event) {
    if (this.to.change) {
      this.to.change(this.field, $event)
    }
  }

  nzOpenChange ($event: boolean) {
    if (this.to.nzOpenChange) {
      this.to.nzOpenChange(this.field, $event)
    }
  }

  nzScrollToBottom ($event: Event) {
    if (this.to.nzScrollToBottom) {
      this.to.nzScrollToBottom(this.field, $event)
    }
  }

  nzOnSearch (value: string) {
    if (this.to.nzOnSearch) {
      this.to.nzOnSearch(this.field, value)
    }
    this.cd.markForCheck();
  }

  nzFocus () {
    if (this.to.focus) {
      this.to.focus(this.field)
    }
  }

  
  nzBlur () {
    if (this.to.blur) {
      this.to.blur(this.field)
    }
  }

  private _destroy$ = new Subject<void>();

  constructor(
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit() { }

  trackByFn(index: any, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy () {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
