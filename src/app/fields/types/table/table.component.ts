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
      #basicTable
      nzTemplateMode
      [nzBordered]="true"
      [nzFrontPagination]="false"
      [nzShowPagination]="false"
    >
      <thead>
        <tr>
          <ng-container *ngFor="let item of field?.fieldArray?.fieldGroup; trackBy: trackByFn">
            <th>{{item?.templateOptions?.label}}</th>
          </ng-container>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of field.fieldGroup; let index = index">
          <ng-container *ngIf="field.fieldGroup && field.fieldGroup[index]">
            <td *ngFor="let td of field.fieldGroup[index].fieldGroup">
              <formly-field [field]="td"></formly-field>
            </td>
          </ng-container>
        </tr>
      </tbody>
    </nz-table>

    <button nz-button (click)="add()">添加一行</button>

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

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index;
  }

  constructor(
    private cd: ChangeDetectorRef,
  ) { 
    super();
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });    
  }

  ngOnDestroy() {
    if (this.field && this.field.fieldGroup) {
      this.field.fieldGroup.map((item, index) => {
        super.remove(index)
      });
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
