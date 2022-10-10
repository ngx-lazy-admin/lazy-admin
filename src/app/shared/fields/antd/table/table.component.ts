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
 } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActionTypeInterface } from '../share-field.type';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'div[table-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `

    <div class="table-toolbar table-operations mb-3 d-flex" *ngIf="actinsOptions && actinsOptions.length">
      <ng-container *ngFor="let item of actinsOptions; let i = index">
        <a 
          nz-button 
          [nzType]="item?.type || 'primary'" 
          [disabled]="item.disabled"
          [nzSize]="item?.size || 'small'"
          [class]="item?.className"

          nz-popconfirm
          [nzPopconfirmTitle]="item.popconfirmTitle"
          [nzPopconfirmPlacement]="item.popconfirmPlacement"

          nz-dropdown 
          [nzDropdownMenu]="item.options ? menu : null"
        >
          <i *ngIf="item?.icon" nz-icon [nzType]="item.icon || 'default'"></i>
          <span *ngIf="item?.text">{{item?.text}}</span>
        </a>

        <nz-dropdown-menu #menu="nzDropdownMenu">
          <ul nz-menu nzSelectable>
            <ng-container *ngFor="let item of item.options">
              <li nz-menu-item>{{item['label']}}</li>
            </ng-container>
          </ul>
        </nz-dropdown-menu>
      </ng-container>
    </div> 

    <nz-table
      #nzTable
      [nzData]="group"
      [nzBordered]="nzBordered"
      [nzScroll]="to.nzScroll"
      [nzFrontPagination]="nzFrontPagination"
      [nzShowPagination]="nzShowPagination"
      (nzPageIndexChange)="pageIndexChange($event)"
      (nzPageSizeChange)="pageSizeChange($event)"
      (nzCurrentPageDataChange)="currentPageDataChange($event)"
    >
      <thead>
        <tr>
          <ng-container *ngFor="let item of fieldGroups;">
            <th *ngIf="!item.hide" [nzWidth]="nzWidth" [nzRight]="item?.templateOptions?.right">
              {{item?.templateOptions?.label}}

              <ng-container *ngIf="item?.templateOptions?.tooltipTitle">
                <i nz-icon 
                  [nzType]="item?.templateOptions?.tooltipIcon || 'close'" 
                  nzTheme="outline" 
                  nz-tooltip 
                  [nzTooltipTitle]="item?.templateOptions?.tooltipTitle">
                </i>
              </ng-container>
            </th>
          </ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of nzTable.data; trackBy: trackByFn; let index = index;">
          <ng-container *ngFor="let td of data.fieldGroup;  trackBy: trackByFn; let i = index;">
            <td  *ngIf="!td.hide" [nzRight]="td?.templateOptions?.right">
              <formly-field [field]="td"></formly-field>
            </td>
          </ng-container>
        </tr>
      </tbody>
    </nz-table>
  `
})

export class TableField extends FieldArrayType implements OnDestroy {

  @ViewChild('nzTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;

  private destroy$ = new Subject();

  get group (): any[] {
    if (this.field.fieldGroup instanceof Array) {
      return this.field.fieldGroup
    } else {
      return []
    }
  }

  get fieldGroups (): any[] {
    return (this.field.fieldArray as FormlyFieldConfig).fieldGroup || []
  }

  get nzSelectedIndex(): number {
		return this.props.nzSelectedIndex || 0;
	}

  get nzShowPagination() : boolean {
    return this.props.nzShowPagination || this.props.showPagination || false;
  }

  get nzFrontPagination() : boolean {
    return this.props.nzFrontPagination || this.props.frontPagination || true;
  }

  get nzAnimated(): boolean  {
		return this.props.nzAnimated || false;
	}

  get nzTitle(): string | TemplateRef<void> {
    return this.props.title || this.props.nzTitle || ''
  }

  get nzWidth(): string {
    return '10%'
  }

  get nzBordered(): boolean {
    return this.props.nzBordered || this.props.bordered || false
  }

  get editor(): boolean {
    return this.props.editor || false
  }

  get nzSize(): NzSizeLDSType {
		return this.props.nzSize || 'default';
	}

  get nzTabBarExtraContent(): string|TemplateRef<void> {
		return this.props.nzTabBarExtraContent || false;
	}

  get nzTabBarStyle():  { [key: string]: string } | null {
		return this.props.nzTabBarStyle || false;
	}

  get nzTabBarGutter():  number {
		return this.props.nzTabBarGutter || false;
	}

  get nzHideAll(): boolean {
		return this.props.nzHideAll || false;
	}

	get nzLinkRouter(): string|TemplateRef<void> {
		return this.props.nzLinkRouter || false;
	}

	get nzLinkExact(): string|TemplateRef<void> {
		return this.props.nzLinkExact || '';
  }

  get nzCanDeactivate() : boolean {
		return this.props.nzCanDeactivate || false;
  }

  get nzCentered() : boolean {
		return this.props.nzCentered || false;
  }

  get nzHideAdd(): boolean {
    return this.props.nzHideAdd || false;
  }

  get nzAddIcon(): string | TemplateRef<void> {
    return this.props.nzAddIcon || false;
  }

  get actinsOptions () : ActionTypeInterface[] {
    return this.props.actinsOptions || []
  }

  editCache: { [key: string]: boolean } = {};

  constructor(
    private cd: ChangeDetectorRef,
  ) { 
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
  }

  edit (field: FormlyFieldConfig) {
    if (field.id) {
      this.editCache[field.id] = true;
    }
  }

  confirm (field: FormlyFieldConfig) {
    if (field.id) {
      this.editCache[field.id] = false;
    }
  }

  cancel (field: FormlyFieldConfig) {
    if (field.id) {
      this.editCache[field.id] = false;
    }
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
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });

    if (this.options && this.options.formState) {
      // this.options.formState[this.id]['caches'] = 
    }
  }

  ngOnDestroy() {
    // if (this.field && this.field.fieldGroup) {

    // }
    this.destroy$.next();
    this.destroy$.complete();    
  }

  isString (str: any) {
    return str instanceof String;
  }

  nzSelectedIndexChange ($event: EventEmitter<number>) {
    if (this.props.nzSelectedIndexChange) {
      this.props.nzSelectedIndexChange($event)
    }
  } 

  nzAdd ($event: EventEmitter<{}>) {
    if (this.props.nzAdd) {
      this.props.nzAdd($event)
    }
  }

  nzClose ($event: EventEmitter<{ index: number }>) {
    if (this.props.nzClose) {
      this.props.nzClose($event)
    }
  }

  trackByIndex(_: number, data: VirtualDataInterface): number {
    return data.index;
  }
} 
