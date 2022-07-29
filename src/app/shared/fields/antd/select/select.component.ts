import { Component, ChangeDetectorRef,  ChangeDetectionStrategy, OnDestroy, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { map, debounceTime, switchMap, skip, takeUntil, distinctUntilChanged, catchError } from 'rxjs/operators';
import { 
  NzOptionComponent,
  NzSelectItemInterface,
  NzFilterOptionType,
  NzSelectSizeType,
  NzSelectModeType
} from 'ng-zorro-antd/select';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { execFunc, ShareFieldType } from '../share-field.type';

export interface NzSelectOptionInterface {
  label: string | number | null ;
  value: NzSafeAny | null;
  disabled?: boolean;
  hide?: boolean;
  groupLabel?: string | number | null;
}

@Component({
  selector: 'div[select-field]',
  templateUrl: './select.component.html',
  styleUrls: [
    './select.component.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})

export class SelectField extends ShareFieldType implements OnInit,  OnDestroy {

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
      return  o2?.nzLabel.toLowerCase().trim().indexOf(o1.toLowerCase().trim()) > -1;
    }
    return this.to.nzFilterOption || this.to.filterOption || compareFn;
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
    return this.to.nzShowSearch || this.to.showSearch || false;
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

  get nzOptions () : NzSelectOptionInterface[] | any[] {
    return this.to.nzOptions || this.to.options || []
  }

  ngModelChange ($event: Event) {
    // execFunc
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
    } else {
      this.isLoading = true;
      this.searchChange$.next(value);
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

  randomUserUrl = 'https://api.randomuser.me/?results=5';
  searchChange$ = new BehaviorSubject('');
  optionList: string[] = [];
  selectedUser?: string;
  isLoading = false;

  ngOnInit() { 

    const getRandomNameList = (name: string): Observable<any> =>
    this.http.get(`${this.randomUserUrl}`)
        .pipe(
          catchError(() => of({ results: [] })),
          map((res: any) => res.results)
        )
        .pipe(map((list: any) => list.map((item: any) => `${item.name.first} ${name}`)));
    
    // 
    const optionList$: Observable<string[]> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(60))
      .pipe(switchMap(getRandomNameList));
    
    optionList$.subscribe(data => {
      this.optionList = data;
      this.isLoading = false;
    });
  }

  trackByFn(index: any, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy () {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
