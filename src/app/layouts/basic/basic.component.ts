import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, Optional } from '@angular/core';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from '../layout.service';
import { MenuService } from '../../services/api/menu/menu.services';
import { UserService } from 'src/app/services/api/user';

@Component({
  selector: 'app-layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {}
})
export class LayoutBasicComponent implements OnInit {

  dir: Direction = 'ltr';

  menus: any = null

  private destroy$ = new Subject<void>();

  constructor(
    public user: UserService,
    public layout: LayoutService,
    private cd: ChangeDetectorRef,
    private menu: MenuService,
    @Optional() private directionality: Directionality,
  ) {
    this.layout.change$?.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cd.markForCheck();
      console.log(1111)
    })

    this.menu.change$?.pipe(takeUntil(this.destroy$)).subscribe(item => {
      this.menus = item;
      this.cd.markForCheck();
    })

    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });

  }

  ngOnInit(): void { }

  collapsedChange (isCollapsed: boolean) {
    this.layout.collapseChange(isCollapsed);
  }

  closeDrawer () {
    this.layout.collapseChange(!this.layout.isCollapsed);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
