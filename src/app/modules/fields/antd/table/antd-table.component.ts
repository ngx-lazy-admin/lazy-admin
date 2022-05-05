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
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { PaginationItemRenderContext } from 'ng-zorro-antd/pagination';
import { NzTableComponent, NzTableLayout, NzTablePaginationPosition, NzTablePaginationType, NzTableQueryParams, NzTableSize } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActionTypeInterface, ShareFieldType } from '../share-field.type';

export type SortOrder = 'descend' | 'ascend' | null;

export interface ColumnFilterItem {
  text: string;
  value: string | number | boolean;
  children?: ColumnFilterItem[];
}

export interface FilterConfirmProps {
  closeDropdown: boolean;
}

export interface FilterDropdownProps {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: string) => void;
  selectedKeys: string[];
  confirm: (param?: FilterConfirmProps) => void;
  clearFilters?: () => void;
  filters?: ColumnFilterItem[];
  visible: boolean;
}

export type FilterValue = (boolean)[];

export type FilterSearchType = boolean | ((input: string, record: {}) => boolean);

export type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;

export interface ColumnType<RecordType> {
  title?: string;
  // Sorter
  sorter?:
    | boolean
    | CompareFn<RecordType>
    | {
        compare?: CompareFn<RecordType>;
        /** Config multiple sorter order priority */
        multiple?: number;
      };
  sortOrder?: SortOrder;
  defaultSortOrder?: SortOrder;
  sortDirections?: SortOrder[];
  showSorterTooltip?: boolean;

  // Filter
  filtered?: boolean;
  filters?: ColumnFilterItem[];
  fixed: boolean | string;
  filterDropdown?: string;
  filterMultiple?: boolean;
  filteredValue?: FilterValue | null;
  defaultFilteredValue?: FilterValue | null;
  filterIcon?: string;
  filterMode?: 'menu' | 'tree';
  filterSearch?: FilterSearchType;
  onFilter?: (value: string | number | boolean, record: RecordType) => boolean;
  filterDropdownVisible?: boolean;
  onFilterDropdownVisibleChange?: (visible: boolean) => void;
  filterResetToDefaultFilteredValue?: boolean;

  // Responsive
  responsive?: string[];

  key: string;
}


export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

export interface ColumnsTypeInterface {
  label: string,
  value: string,
  key: string
}

export interface dataSourceType {
  [key: string]: number | string | any[]
}


@Component({
  selector: 'antd-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-table
      #nzTable
      [nzData]="dataSource"
    >
      <thead>
        <tr>
          <ng-container *ngFor="let column of columns; trackBy: trackByFn;">
            <th>{{column?.title}}</th>
          </ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of dataSource; trackBy: trackByFn; let index = index;">
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

export class AntdTable<T> implements OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;
  static ngAcceptInputType_nzFrontPagination: BooleanInput;
  static ngAcceptInputType_nzTemplateMode: BooleanInput;
  static ngAcceptInputType_nzShowPagination: BooleanInput;
  static ngAcceptInputType_nzLoading: BooleanInput;
  static ngAcceptInputType_nzBordered: BooleanInput;
  static ngAcceptInputType_nzOuterBordered: BooleanInput;
  static ngAcceptInputType_nzShowSizeChanger: BooleanInput;
  static ngAcceptInputType_nzHideOnSinglePage: BooleanInput;
  static ngAcceptInputType_nzShowQuickJumper: BooleanInput;
  static ngAcceptInputType_nzSimple: BooleanInput;

  @Input() nzDisabled = false;
  @Input() nzTableLayout: NzTableLayout = 'auto';
  @Input() nzShowTotal: TemplateRef<{ $implicit: number; range: [number, number] }> | null = null;
  @Input() nzItemRender: TemplateRef<PaginationItemRenderContext> | null = null;
  @Input() nzTitle: string | TemplateRef<NzSafeAny> | null = null;
  @Input() nzFooter: string | TemplateRef<NzSafeAny> | null = null;
  @Input() nzNoResult: string | TemplateRef<NzSafeAny> | undefined = undefined;
  @Input() nzPageSizeOptions = [10, 20, 30, 40, 50];
  @Input() nzVirtualItemSize = 0;
  @Input() nzVirtualMaxBufferPx = 200;
  @Input() nzVirtualMinBufferPx = 100;
  @Input() nzVirtualForTrackBy: TrackByFunction<T> = index => index;
  @Input() nzLoadingDelay = 0;
  @Input() nzPageIndex = 1;
  @Input() nzPageSize = 10;
  @Input() nzTotal = 0;
  @Input() nzWidthConfig: ReadonlyArray<string | null> = [];
  @Input() nzData: readonly T[] = [];
  @Input() nzPaginationPosition: NzTablePaginationPosition = 'bottom';
  @Input() nzScroll: { x?: string | null; y?: string | null } = { x: null, y: null };
  @Input() nzPaginationType: NzTablePaginationType = 'default';
  @Input() @InputBoolean() nzFrontPagination = true;
  @Input() @InputBoolean() nzTemplateMode = false;
  @Input() @InputBoolean() nzShowPagination = true;
  @Input() @InputBoolean() nzLoading = false;
  @Input() @InputBoolean() nzOuterBordered = false;
  @Input() @WithConfig() nzLoadingIndicator: TemplateRef<NzSafeAny> | null = null;
  @Input() @WithConfig() @InputBoolean() nzBordered: boolean = false;
  @Input() @WithConfig() nzSize: NzTableSize = 'default';
  @Input() @WithConfig() @InputBoolean() nzShowSizeChanger: boolean = false;
  @Input() @WithConfig() @InputBoolean() nzHideOnSinglePage: boolean = false;
  @Input() @WithConfig() @InputBoolean() nzShowQuickJumper: boolean = false;
  @Input() @WithConfig() @InputBoolean() nzSimple: boolean = false;
  @Output() readonly nzPageSizeChange = new EventEmitter<number>();
  @Output() readonly nzPageIndexChange = new EventEmitter<number>();
  @Output() readonly nzQueryParams = new EventEmitter<NzTableQueryParams>();
  @Output() readonly nzCurrentPageDataChange = new EventEmitter<readonly T[]>();

  @Input() columns: readonly ColumnType<T>[] = [];
  @Input() dataSource: readonly dataSourceType[] = [];

  private _destroy$ = new Subject<void>();

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cd: ChangeDetectorRef,
  ) {}

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
