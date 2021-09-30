import { Component, OnChanges, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-formly-field-checkbox-component',
    templateUrl: './checkbox.component.html',
    styles: [
      `
        :host::ng-deep label {
          margin-bottom: 0;
        }
      `
    ]
})


// checkbox的用法
// 1. 绑定一个boolean对方, 返回一个boolean值
// 2. 绑定一个对象, 返回一个对象{id: xx, value: xx, label: xx}
// 3. 绑定一个对象数组， 返回数组
// 4. 绑定一个对象数组， 返回对象数组

export class FormlyFieldCheckboxComponent extends FieldType implements OnChanges, OnInit {
  ngOnInit() {
    if (this.to.type === 'checkbox-group') {
      const options: any = this.to.options;
      for (const item of options) {
        if (this.model[this.key]) {
          for (const option of this.model[this.key]) {
            if (item.value === option.value) {
              Object.assign(item, option);
            }
          }
        }
      }
    } else if (this.to.type === 'basic-checkbox') {
      this.to.options = this.model[this.key];
      this.formControl.patchValue(this.to.options);
    } else {
      if (this.to['options']) {
          // @ts-ignore
        this.to['options'].forEach(item => {
              if (item['item'] && this.model[this.key] && this.model[this.key].some(val => val === item['value'])) {
                  item['checked'] = true;
              }
          });
      }
    }
  }

  OnChange (event) {
    if (this.to.type === 'checkbox-group') {
      this.model[this.key] = event.filter(item => {
        return item.checked === true;
      });
    } else if (this.to.type === 'basic-checkbox') {
      this.model[this.key] = this.to.options;
    } else if (this.to.type === 'isBoolean') {// 默认响应式表单
    } else if (this.to.type === 'isObject') {// 模板驱动表单
      this.model[this.key].value = event;
    } else if (this.to.type === 'isArrayObject') {
    } else if (this.to.type === 'isArray') {
    } else if (this.to.type === 'toString'){
      this.model[this.key] = event.filter(item => {
        return item.checked === true;
      }).map(item => item.value).join(',');
    }
    this.formControl.patchValue(this.model[this.key]);
  }

  onWrapperChange (event) {
      this.formControl.patchValue(event);
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
}
