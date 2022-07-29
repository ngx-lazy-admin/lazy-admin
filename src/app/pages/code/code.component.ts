import { Component, OnInit, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { editor } from 'monaco-editor';
import * as echarts from 'echarts';

import { FormGroup, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from 'src/app/services/api/swagger';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent implements OnInit {
  editor?: editor.ICodeEditor | editor.IEditor;

  code: string = `
  [
    {
      key: 'email',
      type: 'input',
      className: 'w-25 mb-2 d-inline-block',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ]
  `;

  myChart: any = null

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = []


  constructor(
    private nzConfigService: NzConfigService,
    private elRef:ElementRef,
    private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer,
    private store: StoreService

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

    // this.myChart = echarts.init(this.elRef.nativeElement.querySelector('#main'));
    // // 绘制图表
    // this.myChart.setOption();

    console.log(this.code)
    this.store.getOrderById(111).subscribe(item => {
      console.log(item)
    })
    const options = this.execEval(this.code)
    // this.
    console.log(options)
    this.fields = options
  }

  dark = false;
  onDarkModeChange(dark: boolean): void {
    this.dark = dark;

  }

  error: any

  editorInitialized ($event: any) {
    $event.onDidChangeModelContent(() => {
      let codes = $event.getValue()
      try {
        // 1. 使用eval
        codes = this.sanitizer.bypassSecurityTrustHtml(codes)
        console.log(codes.changingThisBreaksApplicationSecurity)
        const options = this.execEval(codes.changingThisBreaksApplicationSecurity)



        this.fields = options
        this.cd.markForCheck();
      } catch (error) {
        this.error  = error;
        this.cd.markForCheck();
        console.log(error)
      }
    })
  } 

  execEchat (code: string) {
    try {
      // 1. 使用eval
      let options = this.execEval(code)
      options = this.sanitizer.bypassSecurityTrustHtml(options)
      console.log(options)
      this.myChart.setOption(options)
    } catch (error) {
      this.error  = error;
      this.cd.markForCheck();
      console.log(error)
    }
  }



  execEval = (code: string) => eval('(' + code + ')')

  change ($event: any) {
    console.log($event);
  }
}
