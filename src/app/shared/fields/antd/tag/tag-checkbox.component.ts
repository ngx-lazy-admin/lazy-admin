import { FocusMonitor } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, NzSafeAny, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';

@Component({
  selector: '[tag-checkbox]',
  exportAs: 'tagCheckbox',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-tag 
      nzMode="checkable" 
      [attr.id]="nzId"
      [nzChecked]="nzChecked"
      (nzCheckedChange)="checkChange($event)"
    >
      <ng-content></ng-content>
    </nz-tag>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzTagCheckboxComponent),
      multi: true
    }
  ],
  host: {
    '(click)': 'hostClick($event)'
  }
})


export class NzTagCheckboxComponent implements OnInit, ControlValueAccessor, OnDestroy {
  static ngAcceptInputType_nzAutoFocus: BooleanInput;
  static ngAcceptInputType_nzDisabled: BooleanInput;
  static ngAcceptInputType_nzIndeterminate: BooleanInput;
  static ngAcceptInputType_nzChecked: BooleanInput;

  dir: Direction = 'ltr';
  private destroy$ = new Subject<void>();

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  @Input() @InputBoolean() nzChecked = false;
  @Input() @InputBoolean() nzDisabled = false;

  @Input() nzId: string | null = null;
  @Output() readonly nzCheckedChange = new EventEmitter<boolean>();

  hostClick(e: MouseEvent): void {
    e.preventDefault();
  }

  writeValue(value: boolean): void {
    this.nzChecked = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.cd.markForCheck();
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cd: ChangeDetectorRef,
    private focusMonitor: FocusMonitor,
    @Optional() private directionality: Directionality
  ) {}

  ngOnInit(): void {
    this.focusMonitor
      .monitor(this.elementRef, true)
      .pipe(takeUntil(this.destroy$))
      .subscribe(focusOrigin => {
        if (!focusOrigin) {
          Promise.resolve().then(() => this.onTouched());
        }
      });

    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
      this.cd.detectChanges();
    });

    this.dir = this.directionality.value;
  }

  checkChange(checked: boolean): void {
    if (!this.nzDisabled) {
      this.nzChecked = checked;

      this.onChange(this.nzChecked);
      this.nzCheckedChange.emit(this.nzChecked);
    }
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);

    this.destroy$.next();
    this.destroy$.complete();
  }
}