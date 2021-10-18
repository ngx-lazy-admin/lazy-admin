import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuService } from '../../../services/menu.service';
import { UserService } from '../../../services/user.service';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMenuComponent implements OnInit {


  isCollapsed: boolean = false
  menus: any = null
  private destroy$ = new Subject<void>();


  constructor(
    private layout: LayoutService,
    private menu: MenuService,
    private cd: ChangeDetectorRef 
  ) {
    this.layout.change$?.subscribe(item => {
      this.isCollapsed = item;
      this.cd.markForCheck();
    })

    this.menu.change$?.subscribe(item => {
      this.menus = item
      this.cd.markForCheck();
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
