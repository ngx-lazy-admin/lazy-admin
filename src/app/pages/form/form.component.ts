import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(item => {
      // console.log(item)
    })
  }

  form = new FormGroup({});
  model = {
    rate: 1, 
    echart: {
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
    }
 }

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'nz-input',
      className: 'mb-2 d-inline-block',
      wrappers: ['form'],
      templateOptions: {
        nzLayout: 'inline',
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'echart',
      type: 'echarts',
      className: 'mb-2 w-50 d-inline-block',
      templateOptions: {
        label: 'Date',
        placeholder: 'Enter Date',
        required: true,
        nzFormat: 'HH:mm:ss'
      }
    },  
  ];

  onSubmit(model:any) {
    console.log(this.form.valid)
    console.log(this.form)
  }
}
