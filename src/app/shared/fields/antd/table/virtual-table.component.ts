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
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActionTypeInterface, ShareFieldType } from '../share-field.type';

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

@Component({
  selector: 'div[virtual-table-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <nz-table
      #virtualTable
      [nzBordered]="true"
      [nzVirtualItemSize]="54"
      [nzVirtualForTrackBy]="trackByIndex"
      [nzFrontPagination]="false"
      [nzShowPagination]="false"
      [nzData]="group"
      [nzScroll]="{ x: '1200px', y: '650px' }"
    >
      <thead>
        <tr>
          <ng-container *ngFor="let item of fieldGroups; trackBy: trackByFn">
            <th>{{item?.templateOptions?.label}}</th>
          </ng-container>
        </tr>
      </thead>

      <tbody>
        <ng-template nz-virtual-scroll let-data let-index="index">
          <tr >
            <ng-container *ngFor="let td of data.fieldGroup;  trackBy: trackByFn; let i = index;">
              <td  *ngIf="!td.hide" [nzRight]="td?.templateOptions?.right">
                <formly-field [field]="td"></formly-field>
              </td>
            </ng-container>
          </tr>
        </ng-template>
      </tbody>
    </nz-table>
  `
})

export class VirtualTableField extends FieldArrayType implements OnDestroy {

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;

  private destroy$ = new Subject();

  get nzData (): any[] {
    if (this.formControl.value instanceof Array) {
      return this.formControl.value || []
    } else {
      return []
    }
  }

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
       console.log('get')
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

  get columns () : ColumnsTypeInterface[] {
    return this.props.columns || []
  }

  editCache: { [key: string]: boolean } = {};


  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
  }

  edit (field: FormlyFieldConfig) {
    if (field.id) {
      this.editCache[field.id] = true;
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
    console.log(this)
    // this.field.formControl.value
  }

  ngOnDestroy() {
    // if (this.field && this.field.fieldGroup) {
    //   this.field.fieldGroup.map((item, index) => {
    //     super.remove(index)
    //   });
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
