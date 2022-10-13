import { Component, ChangeDetectorRef,  ChangeDetectionStrategy, OnDestroy, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
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
  template: `
    <nz-countdown 
      [nzValue]="nzValue" 
      [nzTitle]="nzTitle"
      [nzFormat]="nzFormat"
      [nzSuffix]="nzSuffix"
      [nzPrefix]="nzPrefix"
      >
    </nz-countdown>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})

export class CountdownField extends FieldType implements OnInit,  OnDestroy {

  get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzId () : string{
    return this.props.nzId || '';
  }

  get nzFormat () : string {
    return this.props.nzFormat || this.props.format || "HH:mm:ss";
  }

  get nzPrefix () : string | TemplateRef<void> {
    return this.props.nzPrefix || this.props.prefix || '';
  }

  get nzSuffix () : string | TemplateRef<void> {
    return this.props.nzSuffix || this.props.prefix || '';
  }

  get nzTitle () : string | TemplateRef<void>	 {
    return this.props.nzTitle || this.props.title || '';
  }

  get nzValue () : string | number {
    return this.formControl.value || '1949101';
  }

  get nzValueStyle () : Object {
    return this.props.nzValueStyle || this.props.valueStyle || null;
  }

  get nzValueTemplate() : TemplateRef<{ $implicit: string | number }> {
    return this.props.nzValueTemplate || this.props.valueTemplate || null
  }

  private _destroy$ = new Subject<void>();

  constructor(
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit() { }

  ngModelChange ($event: Event) {
    if (this.props.change) {
      this.props.change(this.field, $event)
    }
  }

  nzOpenChange ($event: boolean) {
    if (this.props.nzOpenChange) {
      this.props.nzOpenChange(this.field, $event)
    }
  }

  nzScrollToBottom ($event: Event) {
    if (this.props.nzScrollToBottom) {
      this.props.nzScrollToBottom(this.field, $event)
    }
  }

  nzOnSearch (value: string) {
    if (this.props.nzOnSearch) {
      this.props.nzOnSearch(this.field, value)
    }
    this.cd.markForCheck();
  }

  nzFocus () {
    if (this.props.focus) {
      this.props.focus(this.field)
    }
  }

  nzBlur () {
    if (this.props.blur) {
      this.props.blur(this.field)
    }
  }

  trackByFn(index: any, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy () {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
