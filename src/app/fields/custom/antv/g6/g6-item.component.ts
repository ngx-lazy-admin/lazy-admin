// @ts-check
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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';

import G6 from '@antv/g6';

@Component({
  selector: 'g6-field-item',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => G6FieldItem),
      multi: true
    }
  ],
  template: `
    <div id="g6-container"></div>
  `,
})
export class G6FieldItem extends FieldType implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private elRef: ElementRef,

  ) {
    super();
  }

  myChart: any = null;
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  // 基本数据
  tuiEditor: any;
  editorElem: HTMLElement | string = '';
  content: any;

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    // 绘制图表


    const data = {
      // 点集
      nodes: [
        {
          id: 'node1', // String，该节点存在则必须，节点的唯一标识
          x: 100, // Number，可选，节点位置的 x 值
          y: 200, // Number，可选，节点位置的 y 值
        },
        {
          id: 'node2', // String，该节点存在则必须，节点的唯一标识
          x: 300, // Number，可选，节点位置的 x 值
          y: 200, // Number，可选，节点位置的 y 值
        },
      ],
      // 边集
      edges: [
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node2', // String，必须，目标点 id
        },
      ],
    };

    console.log(this.elRef.nativeElement.querySelector('#g6-container'))

    const graph = new G6.Graph({
      container: this.elRef.nativeElement.querySelector('#g6-container'), // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
      width: 800, // Number，必须，图的宽度
      height: 500, // Number，必须，图的高度
    });

    graph.data(data); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图
  }

  
  writeValue(value: any): void {
    if (this.myChart) {

    } else {
      setTimeout(() => {

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

