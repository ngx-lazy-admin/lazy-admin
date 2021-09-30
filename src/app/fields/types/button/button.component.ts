import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html'
})
export class FormlyFieldButtonComponent extends FieldType implements OnInit {

  // 定义一个点击的观察事件
  clickChange$ = new BehaviorSubject({});

  onClick ($event) {
    if (this.model && this.key) {
      this.clickChange$.next(this.formControl.value);
    } else {
      this.clickChange$.next(this);
    }
  }

  ngOnInit(): void {
    if (this.to.onClick) {
      if (this.model && this.key) {
        this.clickChange$.pipe(debounceTime(100)).pipe(switchMap(this.to.onClick)).subscribe(item => {
            this.formControl.setValue(item);
        });
      } else {
        this.clickChange$.pipe(debounceTime(100)).pipe(switchMap(this.to.onClick)).subscribe(item => {});
      }
    }

    if (this.model && this.key) {
        this.formControl.setValue(this.model[this.key]);
    }
  }
}
