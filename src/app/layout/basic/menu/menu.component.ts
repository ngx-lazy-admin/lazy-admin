import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private layout: LayoutService,
    private menu: MenuService,
    private cd: ChangeDetectorRef 
  ) {
    this.layout.isCollapsed$().subscribe(item => {
      this.isCollapsed = item;
      this.cd.markForCheck();
    })

    this.menu.menu$.subscribe(item => {
      this.menus = item
      this.cd.markForCheck();
    })
  }

  ngOnInit(): void {

  }
}
