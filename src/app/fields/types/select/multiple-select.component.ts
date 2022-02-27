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
  selector: 'div[multiple-select-field]',
  template: `
  <nz-select 
    [formControl]="control"
    [formlyAttributes]="field"
    [nzId]="nzId"
    [compareWith]="compareWith"
    [nzAutoClearSearchValue]="nzAutoClearSearchValue"
    [nzAllowClear]="nzAllowClear"
    [nzBackdrop]="nzBackdrop"
    [nzBorderless]="nzBorderless"
    [nzOpen]="nzOpen"
    [nzAutoFocus]="nzAutoFocus"
    [nzDisabled]="nzDisabled"
    [nzDropdownClassName]="nzDropdownClassName"
    [nzDropdownMatchSelectWidth]="nzDropdownMatchSelectWidth"
    [nzDropdownStyle]="nzDropdownStyle"
    [nzCustomTemplate]="nzCustomTemplate"
    [nzServerSearch]="nzServerSearch"
    [nzFilterOption]="nzFilterOption"
    [nzMaxMultipleCount]="nzMaxMultipleCount"
    [nzMode]="nzMode"
    [nzNotFoundContent]="nzNotFoundContent"
    [nzPlaceHolder]="nzPlaceHolder"
    [nzShowArrow]="nzShowArrow"
    [nzShowSearch]="nzShowSearch"
    [nzSize]="nzSize"
    [nzSuffixIcon]="nzSuffixIcon"
    [nzRemoveIcon]="nzRemoveIcon"
    [nzClearIcon]="nzClearIcon"
    [nzMenuItemSelectedIcon]="nzMenuItemSelectedIcon"
    [nzTokenSeparators]="nzTokenSeparators"
    [nzLoading]="nzLoading"
    [nzMaxTagCount]="nzMaxTagCount"
    [nzMaxTagPlaceholder]="nzMaxTagPlaceholder"
    [nzOptionHeightPx]="nzOptionHeightPx"
    [nzOptionOverflowSize]="nzOptionOverflowSize"
    (ngModelChange)="ngModelChange($event)"
    (nzOpenChange)="nzOpenChange($event)"
    (nzOnSearch)="nzOnSearch($event)"
    (nzFocus)="nzFocus()"
    (nzBlur)="nzBlur()"
    >
      
    <ng-container *ngFor="let option of nzOptions; trackBy: trackByFn">
      <nz-option
        class="select-option"
        [nzDisabled]="option?.disabled"
        [nzLabel]="option.label"
        [nzValue]="option.value"
      >
      </nz-option>
    </ng-container>
  </nz-select>


  `,
  styleUrls: [
    './select.component.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})

export class MultipleSelectField extends FieldType implements OnInit,  OnDestroy {

  get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzId () : string{
    return this.to.nzId || '';
  }

  get compareWith (): (o1: any, o2: any) => boolean{
    const compareFn = (o1: any, o2: any) => o1===o2;
    return this.to.compareWith || compareFn
  }

  get nzAutoClearSearchValue () : boolean {
    return this.to.nzAutoClearSearchValue || true;
  }

  get nzAllowClear () : boolean {
    return this.to.nzAllowClear || this.to.allowClear || false;
  }

  get nzBackdrop (): boolean {
    return this.to.nzBackdrop || false;
  }

  get nzBorderless (): boolean {
    return this.to.nzBackdrop || false;
  }

  get nzOpen (): boolean {
    return this.to.nzOpen || false;
  }

  get nzAutoFocus (): boolean {
    return this.to.nzAutoFocus || false;
  }

  get nzDisabled (): boolean {
    return this.to.nzDisabled || false;
  }

  get nzDropdownClassName (): string {
    return this.to.nzDropdownClassName || '';
  }

  get nzDropdownMatchSelectWidth (): boolean {
    return this.to.nzDropdownMatchSelectWidth || true;
  }

  get nzDropdownStyle (): { [key: string]: string; } | null {
    return this.to.nzDropdownStyle || null;
  }

  get nzCustomTemplate (): TemplateRef<{ $implicit: NzOptionComponent }> {
    return this.to.nzCustomTemplate || false;
  }

  get nzServerSearch (): boolean {
    return this.to.nzServerSearch || false;
  }

  get nzFilterOption (): NzFilterOptionType  {
    const compareFn = (o1: any, o2: any) => {
      return o1 && o2 && o1.value && o2.value  ?  (o1?.value?.trim() === o2?.value?.trim()) : (o1 === o2);
    }
    return this.to.nzFilterOption || compareFn;
  }

  get nzMaxMultipleCount (): number {
    return this.to.nzMaxMultipleCount | this.to.maxMultipleCount || Infinity;
  }

  get nzMode (): NzSelectModeType  {
    return this.to.nzMode || this.to.mode || 'default';
  }

  get nzNotFoundContent (): string | TemplateRef<void> {
    return this.to.nzNotFoundContent || null;
  }


  get nzPlaceHolder (): string {
    return this.to.nzPlaceHolder || this.to.placeholder || '';
  }


  get nzShowArrow (): boolean {
    return this.to.nzShowArrow || false;
  }

  get nzShowSearch (): boolean {
    return this.to.nzShowSearch || false;
  }

  get nzSize (): NzSelectSizeType  {
    return this.to.nzSize || 'default';
  }

  
  get nzSuffixIcon (): TemplateRef<any> | string {
    return this.to.nzSuffixIcon || null;
  }

  
  get nzRemoveIcon (): 	TemplateRef<any> {
    return this.to.nzRemoveIcon || null;
  }

  get nzClearIcon (): TemplateRef<any> {
    return this.to.nzClearIcon || null;
  }

  get nzMenuItemSelectedIcon (): TemplateRef<any> {
    return this.to.nzMenuItemSelectedIcon || null;
  }

  get nzTokenSeparators (): string[] {
    return this.to.nzTokenSeparators || [];
  }

  get nzLoading (): boolean {
    return this.to.nzLoading || this.to.loading || false;
  }

  get nzMaxTagCount (): number {
    return this.to.nzMaxTagCount || this.to.maxTagCount || 3;
  }


  get nzMaxTagPlaceholder (): TemplateRef<{ $implicit: any[] }> {
    return this.to.nzMaxTagPlaceholder || null;
  }

  get nzOptionHeightPx (): number {
    return this.to.nzOptionHeightPx || 32;
  }


  get nzOptionOverflowSize (): number {
    return this.to.nzOptionOverflowSize || 8;
  }

  get nzOptions () : NzSelectOptionInterface[] {
    return this.to.nzOptions || this.to.options || []
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
