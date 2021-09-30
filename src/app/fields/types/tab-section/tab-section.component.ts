import { Component, OnDestroy } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'app-tap-section',
  templateUrl: './tab-section.component.html'
})

export class TabSectionComponent extends FieldArrayType implements OnDestroy {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  nzSelectedIndex: Number = 0;
  // 做缓存，动态

  onChange(value) {
    this.nzSelectedIndex = value;
  }

  ngOnDestroy() {
    // 组件销毁时, 删除循环的列表
    this.field.fieldGroup.map((item, index) => {
      super.remove(index);
    });
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
}
