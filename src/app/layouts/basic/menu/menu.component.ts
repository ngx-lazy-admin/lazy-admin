import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMenuComponent implements OnInit {
  private destroy$ = new Subject<void>();

  @Input() @InputBoolean() isCollapsed = false;

  constructor(public menuService: MenuService, private cd: ChangeDetectorRef) {
    this.menuService.change$?.pipe(takeUntil(this.destroy$))?.subscribe(() => {
      this.cd.markForCheck();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
