import { Component, ElementRef, ViewEncapsulation, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { loadScript } from 'src/app/utils';

declare global {
  interface Window {
    echarts: any
  }
}

@Component({
  selector: 'div[echart-field]',
  template: `
    <div id="echart" style="height:400px; width: 100%"></div>
  `,
  styleUrls: [
    './echart.component.css',
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EchartsField extends FieldType implements AfterViewInit {

  constructor(
    private elRef: ElementRef,
  ) {
    super();
  }

  echart: any = null;
  resizeChange$ = new BehaviorSubject<ResizeObserverEntry[]>([]);

  ngAfterViewInit() {
    loadScript('https://cdn.jsdelivr.net/npm/echarts@5.3.3/dist/echarts.js').subscribe(item => {
      this.echart = window.echarts.init(this.elRef.nativeElement.querySelector('#echart'));
      this.echart.setOption(this.formControl.value || this.to.config);
    })

    this.formControl.valueChanges.subscribe(option => {
      this.echart?.setOption(option || this.to.config);
    })

    this.resizeChange$
      .asObservable()
      .pipe(debounceTime(30))
      .subscribe(() => {
        this.echart?.resize();
      });
    
    const resizeObserver = new ResizeObserver(entries => {
      this.resizeChange$.next(entries)
    });

    resizeObserver.observe(this.elRef.nativeElement.querySelector('#echart'));
  }

  ngOnDestroy(): void {
    this.resizeChange$?.unsubscribe();
  }
}

