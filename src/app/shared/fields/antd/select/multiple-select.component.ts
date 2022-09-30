import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

import { 
  NzOptionComponent,
  NzSelectItemInterface,
  NzFilterOptionType,
  NzSelectSizeType,
  NzSelectModeType
} from 'ng-zorro-antd/select';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

import { BehaviorSubject, Subject } from 'rxjs';
import { map, debounceTime, switchMap, skip, takeUntil, distinctUntilChanged } from 'rxjs/operators';

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
    return this.props.nzId || '';
  }

  get compareWith (): (o1: any, o2: any) => boolean{
    const compareFn = (o1: any, o2: any) => o1===o2;
    return this.props.compareWith || compareFn
  }

  get nzAutoClearSearchValue () : boolean {
    return this.props.nzAutoClearSearchValue || true;
  }

  get nzAllowClear () : boolean {
    return this.props.nzAllowClear || this.props.allowClear || false;
  }

  get nzBackdrop (): boolean {
    return this.props.nzBackdrop || false;
  }

  get nzBorderless (): boolean {
    return this.props.nzBackdrop || false;
  }

  get nzOpen (): boolean {
    return this.props.nzOpen || false;
  }

  get nzAutoFocus (): boolean {
    return this.props.nzAutoFocus || false;
  }

  get nzDisabled (): boolean {
    return this.props.nzDisabled || false;
  }

  get nzDropdownClassName (): string {
    return this.props.nzDropdownClassName || '';
  }

  get nzDropdownMatchSelectWidth (): boolean {
    return this.props.nzDropdownMatchSelectWidth || true;
  }

  get nzDropdownStyle (): { [key: string]: string; } | null {
    return this.props.nzDropdownStyle || null;
  }

  get nzCustomTemplate (): TemplateRef<{ $implicit: NzOptionComponent }> {
    return this.props.nzCustomTemplate || false;
  }

  get nzServerSearch (): boolean {
    return this.props.nzServerSearch || false;
  }

  get nzFilterOption (): NzFilterOptionType  {
    const compareFn = (o1: any, o2: any) => {
      return o1 && o2 && o1.value && o2.value  ?  (o1?.value?.trim() === o2?.value?.trim()) : (o1 === o2);
    }
    return this.props.nzFilterOption || compareFn;
  }

  get nzMaxMultipleCount (): number {
    return this.props.nzMaxMultipleCount | this.props.maxMultipleCount || Infinity;
  }

  get nzMode (): NzSelectModeType  {
    return this.props.nzMode || this.props.mode || 'default';
  }

  get nzNotFoundContent (): string | TemplateRef<void> {
    return this.props.nzNotFoundContent || null;
  }


  get nzPlaceHolder (): string {
    return this.props.nzPlaceHolder || this.props.placeholder || '';
  }


  get nzShowArrow (): boolean {
    return this.props.nzShowArrow || false;
  }

  get nzShowSearch (): boolean {
    return this.props.nzShowSearch || false;
  }

  get nzSize (): NzSelectSizeType  {
    return this.props.nzSize || 'default';
  }

  
  get nzSuffixIcon (): TemplateRef<any> | string {
    return this.props.nzSuffixIcon || null;
  }

  
  get nzRemoveIcon (): 	TemplateRef<any> {
    return this.props.nzRemoveIcon || null;
  }

  get nzClearIcon (): TemplateRef<any> {
    return this.props.nzClearIcon || null;
  }

  get nzMenuItemSelectedIcon (): TemplateRef<any> {
    return this.props.nzMenuItemSelectedIcon || null;
  }

  get nzTokenSeparators (): string[] {
    return this.props.nzTokenSeparators || [];
  }

  get nzLoading (): boolean {
    return this.props.nzLoading || this.props.loading || false;
  }

  get nzMaxTagCount (): number {
    return this.props.nzMaxTagCount || this.props.maxTagCount || 3;
  }


  get nzMaxTagPlaceholder (): TemplateRef<{ $implicit: any[] }> {
    return this.props.nzMaxTagPlaceholder || null;
  }

  get nzOptionHeightPx (): number {
    return this.props.nzOptionHeightPx || 32;
  }


  get nzOptionOverflowSize (): number {
    return this.props.nzOptionOverflowSize || 8;
  }

  get nzOptions () : NzSelectOptionInterface[] {
    return this.props.nzOptions || this.props.options || []
  }

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
