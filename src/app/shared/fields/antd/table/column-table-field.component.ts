import {
  Component,
  OnDestroy,
  TemplateRef,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
  SimpleChanges,
  Input,
  TrackByFunction,
  Output,
  ElementRef,
 } from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FieldArrayType } from '@ngx-formly/core';


@Component({
  selector: 'column-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-table
      #dataSource 
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
        <tr *ngFor="let data of dataSource.data; trackBy: trackByFn; let index = index;">
          <ng-container *ngFor="let column of columns;  trackBy: trackByFn; let i = index;">
            <td >
              {{data[column.key]}}
            </td>
          </ng-container>
        </tr>
      </tbody>
    </nz-table>
  `
})

export class columnTableField<T> extends FieldArrayType implements OnDestroy {

  private _destroy$ = new Subject<void>();


  get data (): any[] {
    if (this.formControl.value instanceof Array) {
      return this.formControl.value || []
    } else {
      return []
    }
  }

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cd: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit(): void {
    this.focusMonitor
      .monitor(this.elementRef, true)
      .pipe(takeUntil(this._destroy$))
      .subscribe(focusOrigin => {
        if (!focusOrigin) {
          // Promise.resolve().then(() => this.onTouched());
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index;
  }

  pageIndexChange (index: number) {
    console.log(index)
  }

  pageSizeChange (pageSize: number) {
    console.log(pageSize)
  }

  currentPageDataChange (page: any) {
    // console.log(page)
  }

  ngAfterViewInit(): void {

  }

  isString (str: any) {
    return str instanceof String;
  }

  trackByIndex(_: number, data: VirtualDataInterface): number {
    return data.index;
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this._destroy$.next();
    this._destroy$.complete();  
  }
} 
