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
import { FieldArrayType, FieldType, FormlyFieldConfig, FormlyExtension } from '@ngx-formly/core';
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { ShareFieldType } from '../share-field.type';


import { Directive } from '@angular/core';
import { FormArray } from '@angular/forms';

// import { clone, assignFieldValue, getFieldValue, hasKey } from '../utils';
// import { FormlyFieldConfig, FormlyExtension } from '../models';
// import {  } from '../extensions/field-form/utils';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
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
      [nzData]="formControl?.value"
      [nzScroll]="{ x: '1200px', y: '400px' }"
    >
      <thead>
        <tr>
          <ng-container *ngFor="let item of field?.fieldArray?.fieldGroup; trackBy: trackByFn">
            <th>{{item?.templateOptions?.label}}</th>
            
          </ng-container>
        </tr>
      </thead>
      <tbody>
        <ng-template nz-virtual-scroll let-data let-index="index">
          <tr>
            <!-- <ng-container *ngIf="field.fieldArray">
              <td *ngFor="let td of field.fieldArray?.fieldGroup"> -->
                <!-- <formly-field [field]="td "></formly-field> -->
                <!-- {{ data[td.key] | json}} -->
              <!-- </td>
            </ng-container> -->
            <formly-form 
              class="row" 
              [fields]="field.fieldArray?.fieldGroup || []" 
              [model]="data"
              (modelChange)="modelChange($event)"
              >
            </formly-form>
          </tr>
        </ng-template>
      </tbody>
    </nz-table>
  `
})

export class VirtualTableField extends ShareFieldType implements OnDestroy {

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

  get nzVirtualItemSize(): number {
    return this.to.nzVirtualItemSize || 0
  }

  modelChange ($event: any) {
    console.log($event)
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
    console.log(this)
  }

  ngOnDestroy() {
    if (this.field && this.field.fieldGroup) {
      this.field.fieldGroup.map((item, index) => {
        // super.remove(index)
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

  onPopulate(field: FormlyFieldConfig) {
    // if (!field.formControl && hasKey(field)) {
    //   const control = findControl(field);
    //   registerControl(field, control ? control : new FormArray([], { updateOn: field.modelOptions.updateOn }));
    // }

    // field.fieldGroup = field.fieldGroup || [];

    // const length = field.model ? field.model.length : 0;
    // if (field.fieldGroup.length > length) {
    //   for (let i = field.fieldGroup.length - 1; i >= length; --i) {
    //     unregisterControl(field.fieldGroup[i]);
    //     field.fieldGroup.splice(i, 1);
    //   }
    // }

    // for (let i = field.fieldGroup.length; i < length; i++) {
    //   const f = {
    //     ...clone(typeof field.fieldArray === 'function' ? field.fieldArray(field) : field.fieldArray),
    //     key: `${i}`,
    //   };
    //   field.fieldGroup.push(f);
    // }
  }

  add(i?: number, initialModel?: any, { markAsDirty } = { markAsDirty: true }) {
    // i = i == null ? this.field.fieldGroup.length : i;
    if (!this.model) {
      // assignFieldValue(this.field, []);
    }

    // this.model.splice(i, 0, initialModel ? clone(initialModel) : undefined);
    this._build();
    markAsDirty && this.formControl.markAsDirty();
  }

  remove(i: number, { markAsDirty } = { markAsDirty: true }) {
    this.model.splice(i, 1);
    // unregisterControl(this.field.fieldGroup[i], true);
    // this.field.fieldGroup.splice(i, 1);
    // this.field.fieldGroup.forEach((f, key) => (f.key = `${key}`));
    this._build();
    markAsDirty && this.formControl.markAsDirty();
  }

  private _build() {
    // this.options.build(this.field);
    // this.options.fieldChanges.next({
    //   field: this.field,
    //   value: getFieldValue(this.field),
    //   type: 'valueChanges',
    // });
  }
} 
