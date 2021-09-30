import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-form-field-wrapper',
  templateUrl: './formly-field-wrapper.component.html',
  styleUrls: ['./formly-field-wrapper.component.css'],
})

export class FormlyFieldWrapperComponent extends FieldWrapper implements OnInit {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;

  labelSpan;

  ngOnInit() {
      // 判断表单域是否有栅格
      if (this.to['labelSpan']) {
          this.labelSpan = this.to['labelSpan'];
      } else if (this.field.className && this.field.className.includes('ant-col-')) {
          const arr = this.field.className.split(' ');
          const className = arr.find(res => res.includes('ant-col-'));
          const col = parseInt(className.split('-').pop());
          this.labelSpan = Math.ceil(72 / col);
      }
  }

  onBtnClick () {
    if (this.to.buttonClick) {
      this.to.buttonClick(this.model, this.options);
    }
  }
}
