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

  constructor(
    public user: UserService,
    private layout: LayoutService,
    private menu: MenuService,
    private cd: ChangeDetectorRef 
  ) {
    this.layout.isCollapsed$().subscribe(item => {
      this.isCollapsed = item;
      this.cd.markForCheck();
    })
  }
  menus: any = null


  ngOnInit(): void {
    this.menu.getMenu().subscribe(item => {
      this.menus = item
      console.log(this.menus)
      this.cd.markForCheck();
    })
  }
}
