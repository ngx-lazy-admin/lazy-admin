
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
  ComponentRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkPortalOutletAttachedRef } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';

@Component({
  selector: 'pro-table-item',
  exportAs: 'proTableItem',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-table
      #proTable
      [nzData]="data"
    >
      <thead>
        <tr>
          <ng-container *ngFor="let column of columns; trackBy: trackByFn;">
            <th>{{column?.title}}</th>
          </ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of proTable.data; trackBy: trackByFn; let index = index;">
          <ng-container *ngFor="let column of columns; trackBy: trackByFn;">
            <td>              
              <ng-template 
                [cdkPortalOutlet]="[column, data] | template"
                (attached)="attached($event)">
              </ng-template>
            </td>
          </ng-container>
        </tr>
      </tbody>
    </nz-table>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProTableItemComponent),
      multi: true
    }
  ]
})
export class ProTableItemComponent implements ControlValueAccessor, OnInit, OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};
  
  @Input() 
  @InputBoolean() 
  nzDisabled = false;

  @Input() 
  columns: any[] = []

  data: any[] = []

  private _destroy$ = new Subject<void>();

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

  attached(ref: CdkPortalOutletAttachedRef) {
    ref = ref as ComponentRef<any>;
    ref.instance.change$.subscribe((value: any) => {
      this.onChange(this.data);
    })
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this._destroy$.next();
    this._destroy$.complete();
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index;
  }

  writeValue(value: any[]): void {
    if (value instanceof Array && value) {
      this.data = value
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

