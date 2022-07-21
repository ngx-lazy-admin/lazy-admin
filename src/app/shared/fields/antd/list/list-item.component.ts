import { style } from '@angular/animations';
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
  ElementRef,
 } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { isNumber } from 'src/app/utils';
import { ActionTypeInterface, ShareFieldType } from '../share-field.type';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'div[list-item-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `

  `,
  styles: [
    `
      .ant-list-item {
        padding: unset !important;
      }

      .ant-list-items {
        overflow-x: auto;
      }
    
    `
  ]
})

export class ListItemField extends ShareFieldType implements OnDestroy {

  private destroy$ = new Subject();

  get nzSelectedIndex(): number {
		return this.to.nzSelectedIndex || 0;
	}

  get nzShowPagination() : boolean {
    return this.to.nzShowPagination || this.to.showPagination || false;
  }

  get nzFrontPagination() : boolean {
    return this.to.nzFrontPagination || this.to.frontPagination || true;
  }

  get nzAnimated(): boolean  {
		return this.to.nzAnimated || false;
	}

  get nzTitle(): string | TemplateRef<void> {
    return this.to.title || this.to.nzTitle || ''
  }


  get nzBordered(): boolean {
    return this.to.nzBordered || this.to.bordered || false
  }

  get editor(): boolean {
    return this.to.editor || false
  }

  get nzSize(): NzSizeLDSType {
       console.log('get')
		return this.to.nzSize || 'default';
	}

  get nzTabBarExtraContent(): string|TemplateRef<void> {
		return this.to.nzTabBarExtraContent || false;
	}

  get nzTabBarStyle():  { [key: string]: string } | null {
		return this.to.nzTabBarStyle || false;
	}

  get nzTabBarGutter():  number {
		return this.to.nzTabBarGutter || false;
	}

  get nzHideAll(): boolean {
		return this.to.nzHideAll || false;
	}

	get nzLinkRouter(): string|TemplateRef<void> {
		return this.to.nzLinkRouter || false;
	}

	get nzLinkExact(): string|TemplateRef<void> {
		return this.to.nzLinkExact || '';
  }

  get nzCanDeactivate() : boolean {
		return this.to.nzCanDeactivate || false;
  }

  get nzCentered() : boolean {
		return this.to.nzCentered || false;
  }

  get nzHideAdd(): boolean {
    return this.to.nzHideAdd || false;
  }

  get nzAddIcon(): string | TemplateRef<void> {
    return this.to.nzAddIcon || false;
  }

  get NzWidth(): string {
    console.log(this.field.fieldArray?.fieldGroup)
    const number =  this.field.fieldArray?.fieldGroup?.filter(item => !item.hide).map(item =>  {
      const col = item.className?.split(' ')
        .find(item => item.includes('col-'))
        ?.split('-').find(item => isNumber(item))

      return col ? Number(col) : 0
    })?.reduce((num, total) => num + total)

    if (number && number > 12) {
      return Number((number / 12).toFixed(2)) * 100 + '%'
    } else {
      return '100%'
    }
  }

  editCache: { [key: string]: boolean } = {};

  get toolbarOptions () : ActionTypeInterface[] {
    return this.to.toolbarOptions || []
  }

  // 根据配置生成dom, 然后复制给portal, 再赋值给action

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
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
    // this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data: number) => {
    //     console.log('scroll index to', data);
    //   });

    if (this.options && this.options.formState) {
      // this.options.formState[this.id]['caches'] = 
    }

    


  }

  ngOnDestroy() {
    if (this.field && this.field.fieldGroup) {
      // this.field.fieldGroup.map((item, index) => {
      //   super.remove(index)
      // });
    }
    this.destroy$.next();
    this.destroy$.complete();    
  }

  isString (str: any) {
    return str instanceof String;
  }

  nzSelectedIndexChange ($event: EventEmitter<number>) {
    if (this.to.nzSelectedIndexChange) {
      this.to.nzSelectedIndexChange($event)
    }
  } 

  nzAdd ($event: EventEmitter<{}>) {
    if (this.to.nzAdd) {
      this.to.nzAdd($event)
    }
  }

  nzClose ($event: EventEmitter<{ index: number }>) {
    if (this.to.nzClose) {
      this.to.nzClose($event)
    }
  }

  trackByIndex(_: number, data: VirtualDataInterface): number {
    return data.index;
  }
} 
