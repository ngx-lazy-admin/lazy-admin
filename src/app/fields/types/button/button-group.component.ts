import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

type ButtonClickType = (field: FormlyFieldConfig, input: Event) => boolean;

export interface ButtonGroupOptionInterface {
  label: string | number | null ;
  value?: NzSafeAny | null;
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
        [nzType]="item?.type || 'link'" 
        [disabled]="item.disabled"
        [nzSize]="item?.size || 'small'" 
        (click)="onClick(item, $event)"
      >
        {{item.label}}
      </a>
      <ng-container *ngIf="i != groupOptions.length - 1">
        <nz-divider class="mx-0" nzType="vertical"></nz-divider>
      </ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonGroupField extends FieldType implements OnInit {

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
      item.click(this.field, $event);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
