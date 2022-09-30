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
import { FormControl } from '@angular/forms';
import { FieldArrayType, FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TemplateService } from 'src/app/shared/template';
import { ActionTypeInterface, ShareFieldType } from '../share-field.type';
// import { TemplateService } from '../template.service';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

// reference https://ant.design/components/table-cn/#Column
export interface ColumnsTypeInterface {
  label: string,
  value: string,
  title: string, // 列头显示文字（函数用法 3.10.0 后支持）
  key: string,
  templateRef: any,
  dataIndex: number | string // 列数据在数据项中对应的路径，支持通过数组查询嵌套路径
}

@Component({
  selector: 'div[simple-table-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <pro-table-item
      [formControl]="control"
      [formlyAttributes]="field"
      [columns]="columns"
      (ngModelChange)="change($event)"
    >
    </pro-table-item>
  `
})

export class ProTableField extends FieldType implements OnDestroy {

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;

  private destroy$ = new Subject();

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzData (): any[] {
    if (this.formControl.value instanceof Array) {
      return this.formControl.value || []
    } else {
      return []
    }
  }

  get nzPrefixRef () : any {
    return this.template.get(this.props.prefixRef, this.field)
  }

  get group (): any[] {
    if (this.field.fieldGroup instanceof Array) {
      return this.field.fieldGroup
    } else {
      return []
    }
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

  get columns () : ColumnsTypeInterface[] {
    return this.props.columns || [];  
  }

  constructor(
    private template: TemplateService
  ) {
    super()
  }

  getTemplate (column: any, data: any) {
    return null
  }

  editCache: { [key: string]: boolean } = {};

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
  }

  change ($event: any) {
    // console.log($event)
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

    this.formControl?.valueChanges.subscribe(item => {
      console.log(item)
    })
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
