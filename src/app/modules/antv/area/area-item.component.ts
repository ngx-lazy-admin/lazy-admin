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
import { AreaOptions, Area } from '@antv/g2plot';

@Component({
  selector: 'antv-area-item',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AntvAreaItem),
      multi: true
    }
  ],
  template: `
    <div id="antv-area"></div>
  `,
})
export class AntvAreaItem implements AfterViewInit {

  @Input() 
  config: AreaOptions | null = null

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
    private elRef: ElementRef,
    private cd: ChangeDetectorRef,
  ) {}

  area: any = null;
  data: any = null;
  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    // 绘制图表
    this.area = new Area(this.elRef.nativeElement.querySelector('#antv-area'), {
      ...this.config,
      data: [],
    });

    this.area.render();    
  }

  writeValue(value: any): void {
    if (this.area && value) {
      this.area.changeData(value)
      this.area.render();
    } else {
      setTimeout(() => {
        this.area.changeData(value)
        this.area.render();
      }, 0);
    }
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }
}

