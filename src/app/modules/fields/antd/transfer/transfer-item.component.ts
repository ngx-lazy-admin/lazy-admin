
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
  ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { TransferItem } from 'ng-zorro-antd/transfer';

export interface NzCheckBoxOptionInterface {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'nz-checkbox-wrapper-item',
  exportAs: 'nzCheckboxGroup',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-transfer
      [nzDataSource]="nzDataSource"
      [nzDisabled]="nzDisabled"
      [nzTitles]="['Source', 'Target']"
      [nzSelectedKeys]="['0', '2']">
    </nz-transfer>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzTransferItemComponent),
      multi: true
    }
  ]
})
export class NzTransferItemComponent implements ControlValueAccessor, OnInit, OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  
  @Input() 
  @InputBoolean() 
  nzDisabled = false;

  @Input() 
  nzOptions: NzCheckBoxOptionInterface[] = []

	nzDataSource: TransferItem[] = [];


  private _destroy$ = new Subject<void>();

  trackByOption(_: number, option: NzCheckBoxOptionInterface): string {
    return option.value;
  }

  onCheckedChange(option: NzCheckBoxOptionInterface, checked: boolean): void {
    option.checked = checked;
    let value = this.nzOptions.filter(item => item.checked).map(item => item.value)
    this.onChange(value);
  }

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cd: ChangeDetectorRef,
  ) {
    // TODO: move to host after View Engine deprecation
    this.elementRef.nativeElement.classList.add('ant-checkbox-wrapper-list');
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

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this._destroy$.next();
    this._destroy$.complete();
  }

  writeValue(value: TransferItem[]): void {
    if (value instanceof Array && value) {
      this.nzDataSource = value
      this.cd.markForCheck();
    }
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.nzDisabled = disabled;
    this.cd.markForCheck();
  }
}

