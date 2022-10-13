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
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';

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

  `
})

export class VirtualListField extends FieldArrayType implements OnDestroy {

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;

  private destroy$ = new Subject();

  get nzSelectedIndex(): number {
		return this.props.nzSelectedIndex || 0;
	}

  get nzAnimated(): boolean  {
		return this.props.nzAnimated || false;
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

  get nzVirtualItemSize(): number {
    return this.props.nzVirtualItemSize || 0
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
