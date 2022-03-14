import { Component, ChangeDetectorRef,  ChangeDetectionStrategy, OnDestroy, OnInit, TemplateRef, ViewEncapsulation, Injector } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { pipeTokenType } from 'src/app/pipes/dynamic.pipe'

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
    <nz-statistic 
      [nzPrefix]="nzPrefix"
      [nzSuffix]="nzSuffix"
      [nzValueStyle]="nzValueStyle"
      [nzValueTemplate]="nzValueTemplate"
      [nzValue]="(nzValue | dynamic: nzValuePipe: pipeArgs)!" 
      [nzTitle]="nzTitle">
    </nz-statistic>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})

export class StatisticField extends FieldType implements OnInit, OnDestroy {

  get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzId () : string{
    return this.to.nzId || '';
  }

  get nzPrefix () : string | TemplateRef<void> {
    return this.to.nzPrefix || this.to.prefix || '';
  }

  get nzSuffix () : string | TemplateRef<void> {
    return this.to.nzSuffix || this.to.prefix || '';
  }

  get nzTitle () : string | TemplateRef<void>	 {
    return this.to.nzTitle || this.to.title || '';
  }

  get nzValueStyle () : Object {
    return this.to.nzValueStyle || this.to.valueStyle || null;
  }

  get nzValueTemplate() : TemplateRef<{ $implicit: string | number }> {
    return this.to.nzValueTemplate || this.to.valueTemplate || null
  }

  get nzValue () : string | number {
    return this.formControl.value || '';
  }

  get nzValuePipe (): pipeTokenType {
    return this.to.nzValuePipe || this.to.valuePipe || ''
  }

  get pipeArgs (): Array<any>{
    return this.to.pipeArgs || this.to.pipeArgs || ''
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
    private injector: Injector
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
