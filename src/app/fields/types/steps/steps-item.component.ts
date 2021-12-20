
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
  ViewEncapsulation,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';


export interface StepsOptionInterface {
  value: any | null;
  description?: string | TemplateRef<void>;
  icon: string | string[] | Set<string> | { [klass: string]: any; }
  status: 'wait' | 'process' | 'finish' | 'error';
  label: string | TemplateRef<void>;
  subtitle: string | TemplateRef<void>;
  disabled?: boolean;
  percentage?: number;
}

@Component({
  selector: 'nz-steps-item',
  exportAs: 'nzSliderItem',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzStepsItemComponent),
      multi: true
    }
  ],
  template: `
    <nz-steps 
      [nzCurrent]="current"
      [nzProgressDot]="nzProgressDot"
      [nzStartIndex]="nzStartIndex">
      <ng-container *ngFor="let item of options; let i = index; trackBy: trackByFn">
        <nz-step 
          [nzTitle]="item.label"
          [nzIcon]="item?.icon"
          [nzTitle]="item?.label"
          [nzSubtitle]="item?.subtitle"
          [nzDisabled]="item?.disabled"
          [nzPercentage]="item.percentage || null"
        >
        </nz-step>
      </ng-container>
    </nz-steps>
  `,
})
export class NzStepsItemComponent implements ControlValueAccessor, OnInit, OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  current: number = 0;

  @Input() @InputBoolean() nzDisabled: boolean = false;
  @Input() @InputBoolean() nzReverse: boolean = false;
  @Input() @InputBoolean() nzType: string = 'default';
  @Input() @InputBoolean() nzDirection: string = 'horizontal';
  @Input() @InputBoolean() nzLabelPlacement: string = 'horizontal';
  @Input() @InputBoolean() nzProgressDot: boolean = false;  
  @Input() @InputBoolean() nzSize: string = 'default';
  @Input() @InputBoolean() nzStatus: string = 'process';
  @Input() @InputNumber() nzStartIndex: number = 0;
  @Input() options: StepsOptionInterface[] = []

  private _destroy$ = new Subject<void>();

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

  nzIndexChange ($event: boolean) {
    // this.to
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
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

