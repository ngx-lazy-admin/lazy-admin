import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { loadMicroApp } from 'qiankun';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-qiankun',
  templateUrl: './qiankun.component.html',
  styleUrls: ['./qiankun.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QiankunComponent implements AfterViewInit {
  constructor(
    private elRef: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
		private cd: ChangeDetectorRef,
  ) {}

  private destroy$ = new Subject();

  ngAfterViewInit(): void {
    this.init();

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  init() {
    const origin = this.route.snapshot.queryParams.origin;
    if (origin) {
      loadMicroApp({
        name: 'qiankun',
        entry: origin,
        container: this.elRef.nativeElement.querySelector('#qiankun'),
      });
    }
  }
}
