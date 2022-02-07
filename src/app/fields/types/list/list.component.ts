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
import { ButtonGroupOptionInterface } from '../button/button-group.component';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'div[list-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `

    <div class="table-toolbar mb-3 d-flex" *ngIf="toolbarOptions && toolbarOptions.length">
      <ng-container *ngFor="let item of toolbarOptions; let i = index">
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

    <nz-list >
      <div [class]="field.className">
      <ng-container  *ngFor="let data of formControl.value; trackBy: trackByFn; let index = index;">
        <ng-container *ngIf="field.fieldGroup && field.fieldGroup[index]">

              <nz-list-item [class]="field.fieldGroup[index].className">
                <ng-container  *ngFor="let td of field.fieldGroup[index].fieldGroup">
                  <formly-field [field]="td"></formly-field>
                </ng-container>
              </nz-list-item>

        </ng-container>
      </ng-container>
      </div>
    </nz-list>
  `
})

export class ListField extends FieldArrayType implements OnDestroy {

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

  get nzWidth(): string {
    return '10%'
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

  editCache: { [key: string]: boolean } = {};

  get toolbarOptions () : ButtonGroupOptionInterface[] {
    return this.to.toolbarOptions || []
  }

  constructor(
    private cd: ChangeDetectorRef,
  ) { 
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
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
    // this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data: number) => {
    //     console.log('scroll index to', data);
    //   });

    if (this.options && this.options.formState) {
      // this.options.formState[this.id]['caches'] = 
    }
    console.log(this)
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
