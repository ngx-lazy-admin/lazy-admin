import { Component, OnInit, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { editor } from 'monaco-editor';
import * as echarts from 'echarts';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CodeComponent implements OnInit {


  editor?: editor.ICodeEditor | editor.IEditor;

  code: string = `{
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
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
  }`;

  myChart: any = null


  constructor(
    private nzConfigService: NzConfigService,
    private elRef:ElementRef,
    private cd: ChangeDetectorRef,

  ) {
    const defaultEditorOption = this.nzConfigService.getConfigForComponent('codeEditor')?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: 'vs-dark',
        minimap: {
          enabled: false
        }
      }
    });
  }

  ngOnInit(): void {
    // // 基于准备好的dom，初始化echarts实例

    this.myChart = echarts.init(this.elRef.nativeElement.querySelector('#main'));
    // // 绘制图表
    this.myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
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
    });
  }

  dark = false;
  onDarkModeChange(dark: boolean): void {
    this.dark = dark;

  }

  error: any

  editorInitialized ($event: any) {
    $event.onDidChangeModelContent(() => {
      const codes = $event.getValue()
      try {
        // 1. 使用eval
        let options = this.execEval(codes)
        this.myChart.setOption(options)
      } catch (error) {
        this.error  = error;
        this.cd.markForCheck();
        console.log(error)
      }
    })
  } 

  execFunction = (name: string) => (new Function( 'return ' + name))();
  execEval = (code: string) => eval('(' + code + ')')


  change ($event: any) {
    console.log($event);
  }
}
