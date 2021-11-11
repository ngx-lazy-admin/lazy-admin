
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
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';

@Component({
  selector: 'nz-checkbox-wrapper-item',
  exportAs: 'nzCheckboxGroup',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-slider nzRange [(ngModel)]="model" [nzDisabled]="disabled"></nz-slider>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzCheckboxWrapperItemComponent),
      multi: true
    }
  ]
})
export class NzCheckboxWrapperItemComponent implements ControlValueAccessor, OnInit, OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  @Input() 
  @InputBoolean() 
  nzDisabled = false;

  private _destroy$ = new Subject<void>();

  model: string | null = null;

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

  writeValue(value: string[]): void {
    // this.nzOptions = this.nzOptions.map(item => {
    //   const v = value.some((v: string) => v === item.value)
    //   return {
    //     ...item,
    //     checked: v
    //   }
    // });
    this.cd.markForCheck();
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

