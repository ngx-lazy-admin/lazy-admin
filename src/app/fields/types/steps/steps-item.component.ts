
import { FocusMonitor } from '@angular/cdk/a11y';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
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
  selector: 'nz-steps-item',
  exportAs: 'nzSliderItem',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-steps 
      [nzCurrent]="current"
      [nzType]="nzType"
      [nzDirection]="nzDirection"
      [nzLabelPlacement]="nzLabelPlacement"
      [nzProgressDot]="nzProgressDot"
      [nzSize]="nzSize"
      [nzStatus]="nzStatus"
      [nzStartIndex]="nzStartIndex"
      (nzIndexChange)="nzIndexChange($event)"
      >
        <ng-content></ng-content>
    </nz-steps>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzStepsComponent),
      multi: true
    }
  ]
})
export class NzStepsComponent implements ControlValueAccessor, OnInit, OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  @Input() @InputBoolean() nzDisabled: boolean = false;
  @Input() @InputBoolean() nzReverse: boolean = false;
  @Input() @InputBoolean() nzType: string = 'default';
  @Input() @InputBoolean() nzDirection: string = 'horizontal';
  @Input() @InputBoolean() nzLabelPlacement: string = 'horizontal';
  @Input() @InputBoolean() nzProgressDot: boolean = false;  
  @Input() @InputBoolean() nzSize: string = 'default';
  @Input() @InputBoolean() nzStatus: string = 'process';

  private _destroy$ = new Subject<void>();

  current: number  = 0;

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cd: ChangeDetectorRef,
  ) {
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

  onModelChange ($event: EventEmitter<number>) {
    this.onChange($event);
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this._destroy$.next();
    this._destroy$.complete();
  }

  writeValue(value: number): void {
    this.current = value
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

