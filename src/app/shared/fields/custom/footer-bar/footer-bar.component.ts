import { Component, ElementRef, ViewEncapsulation, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FieldType,  } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

declare global {
  interface Window {
    echarts: any
  }
}

@Component({
  selector: 'div[footer-bar-field]',
  template: `
    <div [ngClass]="to.bodyClass" [ngStyle]="to.bodyStyle">
      <ng-container *ngFor="let item of field.fieldGroup; let i = index; trackBy: trackByFn">
        <formly-field [field]="item"></formly-field>
      </ng-container>
    </div>
  `,
  styleUrls: [
    './footer-bar.component.css',
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBarField extends FieldType implements AfterViewInit {

  constructor(
    private elRef: ElementRef,
  ) {
    super();
  }

  echart: any = null;
  resizeChange$ = new BehaviorSubject<ResizeObserverEntry[]>([]);

  ngAfterViewInit() {

  }

  ngOnDestroy(): void {
    this.resizeChange$?.unsubscribe();
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }
}

