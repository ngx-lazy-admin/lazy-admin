import { Component, ChangeDetectorRef,  ChangeDetectionStrategy, OnDestroy, OnInit} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, debounceTime, switchMap, skip, takeUntil, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'div[select-field]',
  templateUrl: './select.component.html',
  styleUrls: [
    './select.component.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SelectField extends FieldType implements OnInit,  OnDestroy {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzId () : string{
    return this.to.nzId || ''
  }


  get nzAutoClearSearchValue () : boolean {
    return this.to.nzAutoClearSearchValue || true
  }

  get nzAllowClear () : boolean {
    return this.to.nzAllowClear || false
  }

  get nzBackdrop (): boolean {
    return this.to.nzBackdrop || false
  }

  get nzBorderless (): boolean {
    return this.to.nzBackdrop || false
  }

  get nzOpen (): boolean {
    return this.to.nzOpen || false
  }

  get nzAutoFocus (): boolean {
    return this.to.nzAutoFocus || false
  }

  get nzDisabled (): boolean {
    return this.to.nzDisabled || false
  }

  get nzDropdownClassName (): boolean {
    return this.to.nzDropdownClassName || false
  }

  get nzDropdownMatchSelectWidth (): boolean {
    return this.to.nzDropdownMatchSelectWidth || false
  }

  get nzDropdownStyle (): boolean {
    return this.to.nzDropdownStyle || false
  }

  get nzCustomTemplate (): boolean {
    return this.to.nzCustomTemplate || false
  }

  get nzServerSearch (): boolean {
    return this.to.nzServerSearch || false
  }

  get nzFilterOption (): boolean {
    return this.to.nzFilterOption || false
  }

  get nzMaxMultipleCount (): boolean {
    return this.to.nzMaxMultipleCount || false
  }

  get nzMode (): boolean {
    return this.to.nzMode || false
  }

  get nzNotFoundContent (): boolean {
    return this.to.nzNotFoundContent || false
  }


  get nzPlaceHolder (): boolean {
    return this.to.nzPlaceHolder || false
  }


  get nzShowArrow (): boolean {
    return this.to.nzShowArrow || false
  }

  get nzSize (): boolean {
    return this.to.nzSize || false
  }

  
  get nzSuffixIcon (): boolean {
    return this.to.nzSuffixIcon || false
  }

  
  get nzRemoveIcon (): boolean {
    return this.to.nzRemoveIcon || false
  }

  get nzClearIcon (): boolean {
    return this.to.nzClearIcon || false
  }

  get nzMenuItemSelectedIcon (): boolean {
    return this.to.nzMenuItemSelectedIcon || false
  }

  get nzTokenSeparators (): boolean {
    return this.to.nzTokenSeparators || false
  }

  get nzLoading (): boolean {
    return this.to.nzLoading || false
  }

  get nzMaxTagCount (): boolean {
    return this.to.nzMaxTagCount || false
  }


  get nzMaxTagPlaceholder (): boolean {
    return this.to.nzMaxTagPlaceholder || false
  }


  get nzOptions (): boolean {
    return this.to.nzOptions || false
  }


  get nzOptionHeightPx (): boolean {
    return this.to.nzOptionHeightPx || false
  }


  get nzOptionOverflowSize (): boolean {
    return this.to.nzOptionOverflowSize || false
  }

  ngModelChange ($event: Event) {
    if (this.to.change) {
      this.to.change(this.field, $event)
    }
  }

  nzOpenChange ($event: Event) {
    if (this.to.nzOpenChange) {
      this.to.nzOpenChange(this.field, $event)
    }

    if (!this.optionsCache['_default']) {
      this.searchChange$.next(this.searchValue);
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

    // 判断是否是异步搜索
    if (this.nzServerSearch && value) {
      this.searchValue = value;
      if (this.optionsCache[this.searchValue]) {
        this.isLoading = false;
        this.to['options'] = this.optionsCache[this.searchValue];
      } else {
        this.isLoading = true;
        this.searchChange$.next(this.searchValue);
      }
    }
    this.cd.markForCheck();
  }

  nzFocus ($event: Event) {
    if (this.to.focus) {
      this.to.focus(this.field, $event)
    }
  }

  
  nzBlur ($event: Event) {
    if (this.to.blur) {
      this.to.blur(this.field, $event)
    }
  }


  searchValue: string | null = '';
  searchChange$ = new BehaviorSubject<string|null>(null);
  isLoading = false;
  option = [];
  optionsCache:any = {};


  // 判断是否是多选
  isTags = false;
  isMultiple = false;

  private _destroy$ = new Subject<void>();

  constructor(
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  compareFn = (o1: any, o2: any) => {
    return o1 && o2 && o1.value && o2.value ? trim(o1.value) === trim(o2.value) : o1 === o2;
  }

  filterOption = (input, option) => {
    return option['nzLabel'].toUpperCase().indexOf(input.trim().toUpperCase()) > -1 ? true : false;
  }


  ngOnInit() {

    // 如果是异步，则搜索
    // if (this.isAsyn) {
    //   // 当前是异步搜索
    //   if (this.model[this.key]) {
    //     if (this.model[this.key] instanceof Array) {
    //       // 如果不是单选
    //       this.to['options'] = this.model[this.key];
    //     } else {
    //       this.to['options'] = [this.model[this.key]];
    //     }
    //   }
    //   this.getOptionsBySearchUrl();
    // }

    if (this.formControl.value) {
      if (Array.isArray(this.to['options']) && this.to['options'].length > 0) {
        const option = this.to['options'].find(item => item.value === this.formControl.value);
      }
    }

    // 监听值变更
    this.formControl.valueChanges
      .pipe(takeUntil(this._destroy$))
      .pipe(debounceTime(120))
      .subscribe(value => {
      if (Array.isArray(this.to['options']) && this.to['options'].length > 0) {
        const option = this.to['options'].find(item => item.value === value);
      }
      this.cd.markForCheck();
    });

      /* eslint-disable @typescript-eslint/no-explicit-any */
    const getRandomNameList = (name: string) =>
      this.http
        .get(`${this.randomUserUrl}`)
        .pipe(
          catchError(() => of({ results: [] })),
          map((res: any) => res.results)
        )
        .pipe(map((list: any) => list.map((item: any) => `${item.name.first} ${name}`)));


    const optionList$: Observable<string[]> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap(getRandomNameList));

    optionList$.subscribe(data => {
      if (data && data instanceof Array) {
        this.nzOptions = list;
        this.optionsCache[this.searchValue] = this.to['options'];
      }
      this.isLoading = false;
      this.cd.markForCheck();
    });
  
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy () {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
