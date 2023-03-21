import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface MenuType {
  id: string;
  pid?: string;
  name: string;
  icon?: string;
  link: string;
  level?: number;
  badge?: string;
  selected?: boolean;
  isOpen?: boolean;
  isTabs?: boolean;
  children?: Array<MenuType>;
}

@Injectable()
export class TabsService {
  private _menuUrl = 'api/menu';

  private _menuObj: any = {};

  private _destroy$ = new Subject();
  private _menu$ = new BehaviorSubject<Array<MenuType | null> | null>(null);
  private _tabset$ = new BehaviorSubject<Array<MenuType | null> | null>([]);

  protected tabset: Array<MenuType> = [];

  // 菜单
  public menus: Array<MenuType> = [];

  // 页头
  public breadcrumb: Array<any> = [];

  public tabsMenu: MenuType[] = [];

  constructor(private http: HttpClient) {}

  get change$() {
    return this._menu$.asObservable();
  }

  get tabsetChange$() {
    return this._tabset$.asObservable();
  }

  // 判断当前路由是否能激活
  canActive(url: string): boolean {
    this.breadcrumb = [];
    if (this.menus && this.menus instanceof Array && this.menus.length) {
      this.isMenu(url, this.menus);
    }
    return true;
  }

  setTabsMenu(menu: MenuType) {
    if (menu?.children && menu.isTabs) {
      this.tabsMenu = menu.children;
      menu.isOpen = true;
    }
  }

  isMenu(url: string, menus: MenuType[], level: number = 1, parent: any = null): void {
    menus.forEach(menu => {
      if (Array.isArray(menu.children)) {
        const list = this.flatten(menu.children);
        menu.isOpen = list.some(item => item.link == url);
      }

      if (!menu.level) {
        menu.level = level;
      }

      this._menuObj[menu.id] = menu;

      if (menu.link == url) {
        this.addMenuName(menu);
        this.addTabset(menu);
      } else if (menu?.children) {
        this.isMenu(url, menu.children, level + 1, menu);
      }
    });
  }

  addMenuName(menu: any) {
    if (menu.name) {
      this.breadcrumb.unshift(menu.name);
    }

    if (menu.pid && menu.pid != '0') {
      this.addMenuName(this._menuObj[menu.pid]);
    }
  }

  isMenuOpen(url: string, menus: MenuType[]): boolean {
    return menus.some(item => item.link === url);
  }

  flatten(arr: MenuType[]): MenuType[] {
    let result: MenuType[] | undefined = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i]['children'] && Array.isArray(arr[i]['children'])) {
        // let list = this.flatten(arr[i]['children'])
        // result = result.concat(list);
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }

  set(config: any) {
    this._menuUrl = config['menuUrl'];
  }

  getMenu(menuUrl?: string): Observable<Array<MenuType>> {
    return this.http.get<Array<MenuType>>(menuUrl || this._menuUrl).pipe(
      tap(menu => {
        this.menus = menu;
        this._menu$.next(this.menus);
      })
    );
  }

  setMenu(menu: Array<MenuType>) {
    this.menus = menu;
    this._menu$.next(this.menus);
  }

  addTabset(tab?: any) {
    if (!this.tabset.some(item => item.link === tab.link)) {
      this.tabset = [...this.tabset, tab];
      this._tabset$.next(this.tabset);
    } else {
      this.activeTabset(tab);
    }
  }

  closeTabSet(index: number) {
    if (this.tabset.length === 1) {
      return;
    }

    let selected = this.tabset[index].selected;
    this.tabset.splice(index, 1);
    if (selected) {
      const i = index > this.tabset.length ? this.tabset.length : index;
      this.activeTabset(this.tabset[i]);
    }
  }

  activeTabset(menu: MenuType) {
    this.tabset = this.tabset.map(item => {
      return {
        ...item,
        selected: item.link === menu.link ? true : false
      };
    });

    this._tabset$.next(this.tabset);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
