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
import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { Line, LineOptions } from '@antv/g2plot';

@Component({
  selector: 'g2-plot-item',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => G2PlotItem),
      multi: true
    }
  ],
  template: `
    <div id="g2-plot-line"></div>
  `,
})
export class G2PlotItem implements AfterViewInit {

  @Input() 
  config: LineOptions = {
    data: [],
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
  }


  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private elRef: ElementRef,
    private cd: ChangeDetectorRef,
  ) {}

  line: any = null;
  data: any = null;
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    // 绘制图表
    this.line = new Line(this.elRef.nativeElement.querySelector('#g2-plot-line'), {
      ...this.config,
      data: [],
    });

    this.line.render();    
  }

  writeValue(value: any[]): void {
    if (this.line && value) {
      this.line.changeData(JSON.parse(JSON.stringify(value)))
      this.line.render();
    } else {
      setTimeout(() => {
        // this.line.changeData(value)
        this.line.changeData(JSON.parse(JSON.stringify(value)))
        this.line.render();
      }, 0);
    }
  }

  registerOnChange(fn: OnChangeType): void {
    // this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }
}

