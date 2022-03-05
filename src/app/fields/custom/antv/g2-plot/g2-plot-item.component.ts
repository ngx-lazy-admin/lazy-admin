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
// import { Line } from '@antv/g2plot';

@Component({
  selector: 'g2-plot-item',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => G2PlotItem),
  //     multi: true
  //   }
  // ],
  template: `
    <div id="g2-container"></div>
  `,
})
export class G2PlotItem extends FieldType implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private elRef: ElementRef,

  ) {
    super();
  }

  line: any = null;
  data: any = null;
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  // 基本数据
  tuiEditor: any;
  editorElem: HTMLElement | string = '';
  content: any;

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    // 绘制图表
    // this.line = new Line(this.elRef.nativeElement.querySelector('#g2-container'), {
    //   data: this.data,
    //   xField: 'year',
    //   yField: 'value',
    // });
  }

  writeValue(value: any): void {
    // if (this.line) {
    //   this.line.changeData(value)
    //   this.line.render();
    // } else {
    //   setTimeout(() => {
    //     this.line.changeData(value)
    //     this.line.render();
    //   }, 0);
    // }
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

