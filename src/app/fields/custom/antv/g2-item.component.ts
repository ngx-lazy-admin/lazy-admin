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
import { FieldType } from '@ngx-formly/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';

import { Chart } from '@antv/g2';

@Component({
  selector: 'g2-field-item',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => G2FieldItem),
      multi: true
    }
  ],
  template: `
    <div id="g2-container"></div>
  `,
})
export class G2FieldItem extends FieldType implements AfterViewInit {

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
    this.myChart = new Chart({
      container: this.elRef.nativeElement.querySelector('#g2-container'),
      width: 600,
      height: 300,
    });

    const options  = [
      {
        geometry: {
          type: 'interval',
          position: 'type*value'
        },
        schle: {
          value: {
            alias: '销售额(万)',
          },
          type: {
            tickLine: {
              alignTick: false,
            }
          },
        },
        axis: {
          type: {
            tickLine: {
              alignTick: false,
            },
          },
          value: false
        },
        tooltip: {
          showMarkers: false,
        },
        interval: {
          position: 'type*value'
        },
        interaction: 'element-active'
      }
    ]

    // options.map(chart => {

    //   // scale
    //   console.log(chart)
    //   // this.myChart.scale(item.schle)
    //   for (i of chart) {
    //     console.log(i)
    //   }

    //   // this.myChart[item.type]().position(item.position).color('city', item.color.city)
    // })

    this.myChart.container


    

    // this.myChart.point().position('month*temperature').color('city', [ '#1890FF', '#2FC25B' ]);
  }

  
  writeValue(value: any): void {
    if (this.myChart) {
      this.myChart.data(value);
      this.myChart.render();
    } else {
      setTimeout(() => {
        this.myChart.data(value);
        this.myChart.render();
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

