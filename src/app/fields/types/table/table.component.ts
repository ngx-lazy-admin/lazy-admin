import {
  Component,
  OnDestroy,
  TemplateRef,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
 } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    <nz-table
      #nzTable
      [nzData]="formControl.value"
      [nzBordered]="true"
      [nzFrontPagination]="false"
      [nzShowPagination]="false"
    >
      <thead>
        <tr>
          <ng-container *ngFor="let item of field?.fieldArray?.fieldGroup;">
            <th>{{item?.templateOptions?.label}}</th>
          </ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of nzTable.data; trackBy: trackByFn; let index = index;">
          <ng-container *ngIf="field.fieldGroup && field.fieldGroup[index]">
            <td *ngFor="let td of field.fieldGroup[index].fieldGroup">
              <ng-container *ngIf="td.type == 'text' ">
                {{ td.formControl?.value }}
              </ng-container>
              <ng-container *ngIf="td.type != 'text'">
                <formly-field [field]="td"></formly-field>
              </ng-container>
            </td>
          </ng-container>
        </tr>
      </tbody>
    </nz-table>
  `
})

export class TableField extends FieldArrayType implements OnDestroy {

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;

  private destroy$ = new Subject();

  get nzSelectedIndex(): number {
		return this.to.nzSelectedIndex || 0;
	}

  get nzAnimated(): boolean  {
		return this.to.nzAnimated || false;
	}

  get nzTitle(): string | TemplateRef<void> {
    return this.to.title || this.to.nzTitle || ''
  }

  get nzSize(): NzSizeLDSType {
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

  // { [key: string]: { edit: boolean; data: ItemData } } = {}
  get editCache(): { [key: string]: { edit: boolean } } {
    return this.to.editCache || false;
  }

  // editCache: { [key: string]: { edit: boolean; data: ItemData } } = {};

  constructor(
    private cd: ChangeDetectorRef,
  ) { 
    super();
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index;
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
