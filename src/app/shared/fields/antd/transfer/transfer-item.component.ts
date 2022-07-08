
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
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, NgStyleInterface, NzSafeAny, NzStatus, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { TransferCanMove, TransferItem } from 'ng-zorro-antd/transfer';

export interface NzCheckBoxOptionInterface {
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'transfer-item',
  exportAs: 'transferItem',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-transfer
      [nzDataSource]="nzDataSource"
      [nzDisabled]="nzDisabled"
      [nzTitles]="['Source', 'Target']"
      [nzSelectedKeys]="['0', '2']"
      (nzChange)="nzChange($event)"
      (nzSelectChange)="nzSelectChange($event)"
      (nzSearchChange)="nzSearchChange($event)">
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

  nzDataSource: TransferItem[] = [];

  @Input() @InputBoolean() nzDisabled = false;

  @Input() nzTitles: string[] = ['', ''];
  @Input() nzOperations: string[] = [];
  @Input() nzListStyle: NgStyleInterface = {};
  @Input() @InputBoolean() nzShowSelectAll = true;
  @Input() nzItemUnit?: string;
  @Input() nzItemsUnit?: string;
  @Input() nzCanMove: (arg: TransferCanMove) => Observable<TransferItem[]> = (arg: TransferCanMove) => of(arg.list);
  @Input() nzRenderList: Array<TemplateRef<NzSafeAny> | null> | null = null;
  @Input() nzRender: TemplateRef<NzSafeAny> | null = null;
  @Input() nzFooter: TemplateRef<NzSafeAny> | null = null;
  @Input() @InputBoolean() nzShowSearch = false;
  @Input() nzFilterOption?: (inputValue: string, item: TransferItem) => boolean;
  @Input() nzSearchPlaceholder?: string;
  @Input() nzNotFoundContent?: string;
  @Input() nzTargetKeys: string[] = [];
  @Input() nzSelectedKeys: string[] = [];
  @Input() nzStatus: NzStatus = '';

  @Input() 
  nzOptions: NzCheckBoxOptionInterface[] = []

  private _destroy$ = new Subject<void>();

  trackByOption(_: number, option: NzCheckBoxOptionInterface): string {
    return option.value;
  }

  nzChange($event: any): void {
    console.log($event)
    console.log(this.nzDataSource)
  }

  nzSelectChange($event: any): void {
    console.log($event)
    console.log(this.nzDataSource)
  }

  nzSearchChange($event: any): void {
    console.log($event)
    console.log(this.nzDataSource)
  } 

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cd: ChangeDetectorRef,
  ) {
    // TODO: move to host after View Engine deprecation
    this.elementRef.nativeElement.classList.add('transfer-item');
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

