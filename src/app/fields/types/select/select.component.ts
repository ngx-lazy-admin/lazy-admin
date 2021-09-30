import { Component, ChangeDetectorRef,  ChangeDetectionStrategy, OnDestroy, OnInit} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, debounceTime, switchMap, skip, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { trim } from 'lodash';

@Component({
  selector: 'app-select-component',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    ::ng-deep .ant-select-dropdown-menu-item {
      overflow: auto;
      text-overflow: unset;
    }
  `]
})

export class FormlyFieldSelectComponent extends FieldType implements OnInit,  OnDestroy {

  searchValue = '';
  searchChange$ = new BehaviorSubject('');
  isLoading = false;
  option = [];
  optionsCache = {};

  // 判断是否是异步
  isAsyn = false;

  // 判断是否是多选
  isTags = false;
  isMultiple = false;

  description;

  destroy$ = null;

  constructor(
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  get autoSearch () {
      return this.to['autoSearch'] || false;
  }

  compareFn = (o1: any, o2: any) => {
      return o1 && o2 && o1.value && o2.value ? trim(o1.value) === trim(o2.value) : o1 === o2;
  }

  filterOption = (input, option) => {
    return option['nzLabel'].toUpperCase().indexOf(input.trim().toUpperCase()) > -1 ? true : false;
  }

  OnSearch (value) {
    // 判断是否是异步搜索
    if (this.isAsyn && value) {
      this.searchValue = value;
      // 判断是搜索关键字是否有缓存
      if (this.optionsCache[value]) {
        this.isLoading = false;
        this.to['options'] = this.optionsCache[value];
      } else {
        this.isLoading = true;
        this.searchChange$.next(value);
      }
    }
    this.cd.markForCheck();
  }

  ngOnInit() {
    this.isAsyn = this.to['callback'] ? true : false;
    this.isTags = this.to['nzMode'] === 'tags' ? true : false;
    this.isMultiple =  this.to['nzMode'] === 'multiple' ? true : false;

    // 如果是异步，则搜索
    if (this.isAsyn) {
      // 当前是异步搜索
      if (this.model[this.key]) {
        if (this.model[this.key] instanceof Array) {
          // 如果不是单选
          this.to['options'] = this.model[this.key];
        } else {
          this.to['options'] = [this.model[this.key]];
        }
      }
      this.getOptionsBySearchUrl();
    }

    if (this.formControl.value) {
      this.description = '';
      if (Array.isArray(this.to['options']) && this.to['options'].length > 0) {
        const option = this.to['options'].find(item => item.value === this.formControl.value);
        if (option && option.description) {
          this.description = option.description;
        }
      }
    }

    this.destroy$ = new Subject<any>();
    this.formControl.valueChanges.pipe(takeUntil(this.destroy$)).pipe(debounceTime(120)).subscribe(value => {
      this.description = '';
      if (Array.isArray(this.to['options']) && this.to['options'].length > 0) {
        const option = this.to['options'].find(item => item.value === value);
        if (option && option.description) {
          this.description = option.description;
        }
      }
      this.cd.markForCheck();
    });
    this.cd.markForCheck();
  }

  getOptionsBySearchUrl () {
    const optionsList$ = this.searchChange$.asObservable()
      .pipe(skip(1))
      .pipe(debounceTime(100))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(this.to.callback))
      .pipe(map((list: any) => {
        return list.map(item => item);
      }));

    optionsList$.subscribe(list => {
      if (list && list instanceof Array) {
        this.to['options'] = list;
        this.optionsCache[this.searchValue] = this.to['options'];
      }
      this.isLoading = false;
      this.cd.markForCheck();
    });
  }

  onOpenChange ($event) {
    if (!this.optionsCache['0'] && this.autoSearch) {
      this.searchValue = '0';
      this.searchChange$.next('0');
      this.cd.markForCheck();
    }
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy () {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
