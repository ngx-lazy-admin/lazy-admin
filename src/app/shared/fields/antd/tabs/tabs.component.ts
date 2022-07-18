import { 
  Component,
  OnDestroy,
  TemplateRef,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

import { NzTabComponent, NzTabPosition, NzTabType } from 'ng-zorro-antd/tabs'; 
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { ComponentPortal } from '@angular/cdk/portal';

import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[tabs-field]',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class TabsField extends ShareFieldType implements OnDestroy {

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

  get nzTabPosition(): NzTabPosition  {
		return this.to.nzTabPosition || 'top';
	}

  get nzType(): NzTabType  {
		return this.to.nzType || false;
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
		return this.to.nzCentered || this.to.center || false;
  }

  get nzHideAdd(): boolean {
    return this.to.nzHideAdd || false;
  }

  get nzAddIcon(): string | TemplateRef<void> {
    return this.to.nzAddIcon || false;
  }

  getTemplate(ref: any): ComponentPortal<any> | null {
    return this.template.get(ref, this.field);
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy() {
    if (this.field && this.field.fieldGroup) {
      // this.field.fieldGroup.map((item, index) => {
      //   super.remove(index)
      // });
    }
  }

  nzSelectedIndexChange ($event: EventEmitter<number>) {
    if (this.to.nzSelectedIndexChange) {
      this.to.nzSelectedIndexChange($event)
    }
  } 

  nzSelectChange ($event: EventEmitter<{index: number,tab: NzTabComponent}>) {
    if (this.to.nzSelectChange) {
      this.to.nzSelectChange($event)
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
} 
