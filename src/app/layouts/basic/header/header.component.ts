import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../../layout.service';
import { FullScreenService } from '../../full-screen.service';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.bg-gray-100]': 'true',
    '[class.d-block]': 'true'
  }
})
export class LayoutHeaderComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    public layout: LayoutService,
    public menu: MenuService,
    private cd: ChangeDetectorRef,
    private fullScreenService: FullScreenService
  ) {
    this.layout.change$?.pipe(takeUntil(this.destroy$)).subscribe(item => {
      this.cd.markForCheck();
    });

    this.menu.tabsetChange$?.pipe(takeUntil(this.destroy$)).subscribe(item => {
      this.cd.markForCheck();
    });
  }

  collapseChange(isCollapsed: boolean) {
    this.layout.collapseChange(isCollapsed);
  }

  fullScreen() {
    this.fullScreenService.toggle().subscribe(item => {});
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
