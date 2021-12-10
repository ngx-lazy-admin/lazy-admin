import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';

@Component({
  selector: 'div[button-field]',
  template: `
    <button nz-button
      [nzGhost]="nzGhost"
      [nzLoading]="nzLoading"
      [nzShape]="nzShape"
      [nzSize]="nzSize"
      [nzType]="nzType"
      [nzBlock]="nzBlock"
      (click)="onClick($event)">
        <i *ngIf="icon" nz-icon [nzType]="icon"></i>
        <ng-container *ngIf="text">{{ text }}</ng-container>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,


})
export class ButtonField extends FieldType implements OnInit {

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
		return this.to.nzSize || 'small';
  }

  get nzType() : NzButtonType {
		return this.to.nzType || 'link';
  }

  get nzBlock() : boolean {
		return this.to.nzBlock || false;
  }

	get nzDanger(): boolean {
		return this.to.nzDanger || false;
	}

  get text(): string {
    return this.to.text || ''
  }

  get icon(): string {
    return this.to.icon || ''
  }

  private _destroy$ = new Subject<void>();

  onClick ($event: Event) {
    if (this.to.click) {
      this.to.click(this.field, $event);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
