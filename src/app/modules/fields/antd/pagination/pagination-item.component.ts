
import { FocusMonitor } from '@angular/cdk/a11y';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { PaginationItemRenderContext } from 'ng-zorro-antd/pagination';

export interface NzpaginationInterface {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

export interface paginationInterface {
  total: number,
  pageIndex: number,
  pageSize: number
}

@Component({
  selector: 'pagination-item',
  exportAs: 'nzCheckboxGroup',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
		<nz-pagination
      [nzPageIndex]="pagination.pageIndex"
      [nzPageSize]="pagination.pageSize"
      [nzTotal]="pagination.total"
      [nzDisabled]="nzDisabled"
			[nzShowQuickJumper]="nzShowQuickJumper"
			[nzShowSizeChanger]="nzShowSizeChanger"
			[nzSimple]="nzSimple"
			[nzSize]="nzSize"
			[nzResponsive]="nzResponsive"
			[nzPageSizeOptions]="nzPageSizeOptions"
			[nzHideOnSinglePage]="nzHideOnSinglePage"
      [nzDisabled]="nzDisabled"
      (nzPageIndexChange)="pageIndexChange($event)"
      (nzPageSizeChange)="pageSizeChange($event)"
    >
    </nz-pagination> 
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => paginationFieldItem),
      multi: true
    }
  ]
})
export class paginationFieldItem implements ControlValueAccessor, OnInit, OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  @Output() readonly pageChange: EventEmitter<paginationInterface> = new EventEmitter();

  @Input() nzShowTotal: TemplateRef<{ $implicit: number; range: [number, number] }> | null = null;
  @Input() nzItemRender: TemplateRef<PaginationItemRenderContext> | null = null;
  @Input() nzSize: 'default' | 'small' = 'default';
  @Input() nzPageSizeOptions: number[] = [10, 20, 30, 40];
  @Input() @InputBoolean() nzShowSizeChanger = false;
  @Input() @InputBoolean() nzShowQuickJumper = false;
  @Input() @InputBoolean() nzSimple = false;
  @Input() @InputBoolean() nzDisabled = false;
  @Input() @InputBoolean() nzResponsive = false;
  @Input() @InputBoolean() nzHideOnSinglePage = false;
  @Input() @InputNumber() nzTotal = 0;
  @Input() @InputNumber() nzPageIndex = 1;
  @Input() @InputNumber() nzPageSize = 10;

  private _destroy$ = new Subject<void>();

  pagination: paginationInterface = {
    pageIndex: 1,
    pageSize: 10,
    total: 50 
  }

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cd: ChangeDetectorRef,
  ) {
    // TODO: move to host after View Engine deprecation
    // this.elementRef.nativeElement.classList.add('ant-checkbox-wrapper-list');
  }

  ngOnInit(): void {
    this.focusMonitor
      .monitor(this.elementRef, true)
      .pipe(takeUntil(this._destroy$))
      .subscribe(focusOrigin => {
        if (!focusOrigin) {
          Promise.resolve().then(() => this.onTouched());
        }
      });
  }

  pageSizeChange (pageSize: number) {
    if (!this.nzDisabled) {
      this.pagination.pageSize = pageSize
      this.onChange(this.pagination)
      this.pageChange.emit(this.pagination);
    }
  }

  pageIndexChange (pageIndex: number) {
    if (!this.nzDisabled) {
      this.pagination.pageIndex = pageIndex
      this.onChange(this.pagination)
      this.pageChange.emit(this.pagination);
    }
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this._destroy$.next();
    this._destroy$.complete();
  }

  writeValue(value: paginationInterface): void {
    if (value) {
      this.pagination.pageIndex = value?.pageIndex
      this.pagination.pageSize = value?.pageSize
      this.pagination.total = value?.total
    }
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }
}
