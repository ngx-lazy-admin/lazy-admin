import {
  Component,
  ElementRef, 
  ViewEncapsulation, 
  AfterViewInit, 
  ChangeDetectionStrategy, 
  ChangeDetectorRef, 
  Input, 
  forwardRef 
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';

import { PivotSheet } from '@antv/s2';

@Component({
  selector: 's2-field-item',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => S2FieldItem),
      multi: true
    }
  ],
  template: `
    <div id="s2-container"></div>
  `,
})
export class S2FieldItem extends FieldType implements AfterViewInit {

  constructor(
    private http: HttpClient,
    private elRef: ElementRef,
  ) {
    super();
  }

  s2: any = null;
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  // 基本数据
  tuiEditor: any;
  editorElem: HTMLElement | string = '';
  content: any;

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    // 绘制图表
    const container = this.elRef.nativeElement.querySelector('#s2-container')

    const data = [
      {
        province: "浙江",
        city: "杭州",
        type: "家具",
        sub_type: "桌子",
        price: "1",
      },
      {
        province: "浙江",
        city: "杭州",
        type: "家具",
        sub_type: "沙发",
        price: "2",
      },
      {
        province: "浙江",
        city: "杭州",
        type: "办公用品",
        sub_type: "笔",
        price: "3",
      },
      {
        province: "浙江",
        city: "杭州",
        type: "办公用品",
        sub_type: "纸张",
        price: "4",
      },
    ];

    const config = {
      fields: {
        rows: ["province", "city"],
        columns: ["type", "sub_type"],
        values: ["price"]
      },
      data,
    };

    const options = {
      width: 600,
      height: 600,
    };

    
    this.s2 = new PivotSheet(container, config, options);

    console.log(this.s2)

    this.s2.render();
  }

  
  writeValue(value: any): void {
    if (this.s2) {
      this.s2.render();
    } else {
      setTimeout(() => {
        this.s2.render();
      }, 0);
    }
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    // this.nzDisabled = disabled;
    // this.cd.markForCheck();
  }
}

