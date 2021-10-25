import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';

@Component({
  selector: 'div[button-field]',
  templateUrl: './button.component.html'
})
export class ButtonField extends FieldType implements OnInit {

  // 定义一个点击的观察事件
  clickChange$ = new BehaviorSubject({});

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

  onClick ($event: Event) {
    if (this.to.onClick) {
      this.to.onClick($event, this.field, this.model)
    }
  }

  ngOnInit(): void {
    // if (this.to.onClick) {
    //   if (this.model && this.key) {
    //     this.clickChange$.pipe(debounceTime(100)).pipe(switchMap(this.to.onClick)).subscribe(item => {
    //         this.formControl.setValue(item);
    //     });
    //   } else {
    //     this.clickChange$.pipe(debounceTime(100)).pipe(switchMap(this.to.onClick)).subscribe(item => {});
    //   }
    // }
  }
}
