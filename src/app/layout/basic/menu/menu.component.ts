import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMenuComponent implements OnInit {

  menus: any = null

  constructor(
    public user: UserService,
    private menu: MenuService,
    private cd: ChangeDetectorRef,
  ) { }

  isCollapsed = false
  ngOnInit(): void {
    this.menu.getMenu().subscribe(item => {
      this.menus = item
      console.log(this.menus)
      this.cd.markForCheck();
    })
  }
}
