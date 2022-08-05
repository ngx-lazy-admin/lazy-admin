import { Component, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import { loadScript } from 'src/app/utils';

declare global {
  interface Window {
    echarts: any
  }
}

@Component({
  selector: 'div[echart-field]',
  template: `
    <div id="main" style="height:400px; width: 300px"></div>
  `,
  styleUrls: [
    './echart.component.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class EchartsField extends FieldType implements AfterViewInit {

  constructor(
    private elRef: ElementRef
  ) {
    super();
  }

  myChart: any = null;

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    loadScript('https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.js').subscribe(item => {
      var myChart = window.echarts.init(this.elRef.nativeElement.querySelector('#main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
  
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    })
  }
}

