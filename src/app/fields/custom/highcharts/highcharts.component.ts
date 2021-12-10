import { Component, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import * as Highcharts from 'highcharts';

import Exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'div[highcharts-field]',
  template: `
    <div class="mGraph" id="main"></div>
  `,
  styleUrls: [
    './highcharts.component.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class HighChartField extends FieldType implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private elRef: ElementRef,
  ) {
    super();
    Exporting(Highcharts);
  }

  myChart: any = null;

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    
    // 绘制图表
    // Generate the chart
    Highcharts.chart('container', {
      // options - see https://api.highcharts.com/highcharts
    });

    // Highcharts.stockChart('container', {
    //   rangeSelector: {
    //     selected: 1
    //   },
    //   navigator: {
    //     series: {
    //       color: Highcharts.getOptions().colors[0]
    //     }
    //   },
    //   series: [{
    //     type: 'hollowcandlestick',
    //     name: 'Hollow Candlestick',
    //     data: data
    //   }]
    // });

    if (this.formControl.value) {
      this.myChart.setOption(this.formControl.value);
    }

    this.formControl.valueChanges.subscribe(value => {
      this.myChart.setOption(value);
    })
  }
}

