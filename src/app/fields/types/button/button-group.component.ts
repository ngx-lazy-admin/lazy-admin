import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ShareFieldType } from '../share-field.type';

type ButtonClickType = (field: FormlyFieldConfig, that?: any) => boolean;

export interface ButtonGroupOptionInterface {
  label: string | number | null ;
  value?: NzSafeAny | null;
  icon?: string,
  disabled?: boolean;
  type?: NzButtonType,
  hide?: boolean;
  size?: NzButtonSize;
  click?: ButtonClickType;
}

@Component({
  selector: 'div[button-field]',
  template: `
    <ng-container *ngFor="let item of groupOptions; let i = index">
      <a nz-button 
        [nzType]="item?.type || 'primary'" 
        [disabled]="item.disabled"
        [nzSize]="item?.size || 'small'"
        class="mx-1" 
        (click)="onClick(item, $event)"
      >
        <i *ngIf="item?.icon" nz-icon nzType="item?.icon"></i>
        {{item.label}}
      </a>
      <ng-container *ngIf="i != groupOptions.length - 1">
        <nz-divider class="mx-0" nzType="vertical"></nz-divider>
      </ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonGroupField extends ShareFieldType implements OnInit {

  get disabled(): boolean {
		return this.to.disabled || false;
	}

	get nzGhost(): boolean {
		return this.to.nzGhost || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzShape() : NzButtonShape {
		return this.to.nzShape || '';
  }

  get nzLoading(): boolean {
    return this.to.nzLoading || false;
  }

  get nzSize() : NzButtonSize {
		return this.to.nzSize || 'default';
  }

  get nzType() : NzButtonType {
		return this.to.nzType || '';
  }

  get nzBlock() : boolean {
		return this.to.nzBlock || false;
  }

	get nzDanger(): boolean {
		return this.to.nzDanger || false;
	}

  get groupOptions(): ButtonGroupOptionInterface[] {
    return this.to.groupOptions || []
  }

  private _destroy$ = new Subject<void>();

  onClick (item: ButtonGroupOptionInterface, $event: Event) {
    if (item.click) {
      item.click(this.field, this);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
