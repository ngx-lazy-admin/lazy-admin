import { Component, OnInit} from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { MessageService } from '../../../../services/message.service';
import { findIndex } from 'lodash';

@Component({
  selector: 'app-taps-section',
  templateUrl: './tabs-section.component.html'
})

export class TabsSectionComponent extends FieldArrayType  implements OnInit {
  constructor(
    builder: FormlyFormBuilder,
    private msg: MessageService
  ) {
    super(builder);
  }

  nzSelectedIndex;
  copyContent = null;

  ngOnInit () {
    if (this.formControl.root.get('category_id').value) {
      const id  = this.formControl.root.get('category_id').value;
      this.nzSelectedIndex = findIndex(this.model, item => item.value === id + '');
    }
  }

  copyText (item, index) {
    this.msg.success('复制成功');
    this.copyContent = {
      data: JSON.parse(JSON.stringify(this.model[index])),
      index: index
    };
  }

  copy (item, index) {
    this.msg.success('复制成功');
    super.add(index, {...this.model[index], id: null});
  }

  paste (data, index) {
    if (this.copyContent && this.copyContent.data) {
      this.msg.success('黏贴成功');

      if (this.model[index].need_approver.subcategory_need_approver
          && this.model[index].need_approver.subcategory_need_approver.some(item => item.need_approver)) {
            this.copyContent.data.need_approver = {
              need_approver: '',
              subcategory_need_approver: this.model[index].need_approver.subcategory_need_approver
            };
      } else {
        this.copyContent.data.need_approver.subcategory_need_approver
            = this.copyContent.data.need_approver.subcategory_need_approver.map(item => {
          return {
            ...item,
            need_approver: ''
          };
        });
      }

      const target = Object.assign({}, {
                    ...this.copyContent.data,
                    label: this.model[index].label,
                    value: this.model[index].value
                  });
      super.remove(index);
      super.add(index, target);
    } else {
      this.msg.error('缓存没有数据, 请重新复制');
    }
  }

  trackByFn(index, item) {
    return item.id ? item.id : index; // or item.id
  }
}
