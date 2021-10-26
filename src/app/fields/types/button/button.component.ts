import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';

@Component({
  selector: 'div[button-field]',
  templateUrl: './button.component.html'
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
