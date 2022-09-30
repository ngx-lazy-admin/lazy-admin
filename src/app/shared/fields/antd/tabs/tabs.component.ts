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

  get nzTabPosition(): NzTabPosition  {
		return this.props.nzTabPosition || 'top';
	}

  get nzType(): NzTabType  {
		return this.props.nzType || false;
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
		return this.props.nzCentered || this.props.center || false;
  }

  get nzHideAdd(): boolean {
    return this.props.nzHideAdd || false;
  }

  get nzAddIcon(): string | TemplateRef<void> {
    return this.props.nzAddIcon || false;
  }

  getTemplate(ref: any): ComponentPortal<any> | null {
    return ref && this.template.get(ref, this.field);
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
    if (this.props.nzSelectedIndexChange) {
      this.props.nzSelectedIndexChange($event)
    }
  } 

  nzSelectChange ($event: EventEmitter<{index: number,tab: NzTabComponent}>) {
    if (this.props.nzSelectChange) {
      this.props.nzSelectChange($event)
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
} 
