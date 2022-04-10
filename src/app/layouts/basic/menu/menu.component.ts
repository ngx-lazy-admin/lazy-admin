import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { MenuService } from 'src/app/services/api/menu';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutMenuComponent implements OnInit {


  menus: any = null
  private destroy$ = new Subject<void>();

  @Input() @InputBoolean() isCollapsed = false;

  constructor(
    private layout: LayoutService,
    public menuService: MenuService,
    private cd: ChangeDetectorRef 
  ) {
    this.menuService.change$?.subscribe(item => {
      this.menus = item;
      this.cd.markForCheck();
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


