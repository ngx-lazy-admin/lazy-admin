import { Component, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import * as echarts from 'echarts';

@Component({
  selector: 'div[echart-field]',
  template: `
    <div class="mGraph" id="echart"></div>
  `,
  styleUrls: [
    './echart.component.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class EchartsField extends FieldType implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private elRef: ElementRef,
  ) {
    super();
  }

  myChart: any = null;

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    
    // 绘制图表
    this.myChart = echarts.init(this.elRef.nativeElement.querySelector('#echart'));

    if (this.formControl.value) {
      this.myChart.setOption(this.formControl.value);
    }

    this.formControl.valueChanges.subscribe(value => {
      this.myChart.setOption(value);
    })
  }
}

