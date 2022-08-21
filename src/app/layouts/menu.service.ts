import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface MenuType {
  id: string,
  pid?: string,
	name: string, 
	icon?: string,
	link: string,
  level?: number,
	badge?: string,
	selected?: boolean,
  isOpen?: boolean,
  isTabs?: boolean,
	children?: Array<MenuType>
}

@Injectable()
export class MenuService {

  private _destroy$ = new Subject();
  private _menu$ = new BehaviorSubject<Array<MenuType|null>|null>(null);
  private _menuUrl = 'api/menu';
  public menus: Array<MenuType> = [];
  private _activeMenu: MenuType|null = null;

  private _tabset$ = new BehaviorSubject<Array<MenuType|null>|null>([]);
  private _tabset:  Array<MenuType> = [];
  public breadcrumb: Array<any> = [];
  public tabsMenu: MenuType[] = []; 
  private _menuObj: any = {};

  constructor(
    private http: HttpClient,
  ) {}

  get change$() {
    return this._menu$.asObservable()
  }

  get tabsetChange$() {
    return this._tabset$.asObservable()
  }

  // 判断当前路由是否能激活
  canActive(url: string): boolean {
    this.breadcrumb = [];
    if (this.menus && this.menus instanceof Array && this.menus.length) {
      this.isMenu(url, this.menus)
    }
    return true;
  }

  setTabsMenu (menu: MenuType) {
    if (menu?.children && menu.isTabs) {
      this.tabsMenu = menu.children
      menu.isOpen = true
    }
  }

  isMenu (url: string, menus: MenuType[], level: number = 1, parent: any = null): void {
    menus.forEach(menu => {

      if (Array.isArray(menu.children)) {
        const list = this.flatten(menu.children)
        menu.isOpen = list.some(item => item.link == url)
      }

      if (!menu.level) {
        menu.level = level
      }

      this._menuObj[menu.id] = menu;

      if (menu.link == url) {
        this.addMenuName(menu)
        this.addTabset(menu)
      } else if (menu?.children) {
        this.isMenu(url, menu.children, level + 1, menu)
      }
    })
  }

  addMenuName(menu: any) {
    if (menu.name) {
      this.breadcrumb.unshift(menu.name)
    }

    if (menu.pid && menu.pid != '0') {
      this.addMenuName(this._menuObj[menu.pid])
    }
  }

  isMenuOpen (url: string, menus: MenuType[]): boolean {
    return menus.some(item => item.link === url)
  }

  flatten(arr: MenuType[]):  MenuType[] {
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

  set (config: any) {
    this._menuUrl = config['menuUrl']
  }

  getMenu(menuUrl?: string): Observable<Array<MenuType>> {
    return this.http.get<Array<MenuType>>(menuUrl || this._menuUrl).pipe(tap(menu => {
      this.menus = menu;
      console.log('getMenu', menu)
      this._menu$.next(this.menus)
    }))
  }

  setMenu (menu: Array<MenuType>) {
    this.menus = menu;
    this._menu$.next(this.menus)
  }

  addTabset (menu?: any) {
    if (!this._tabset.some(item => item.link === menu.link)) {
      this._tabset = [...this._tabset, menu]
      this._tabset$.next(this._tabset);
    } else {
      this.activeTabset(menu)
    }
  }

  closeTabSet (index: number) {
    if (this._tabset.length === 1) {
      return;
    }
    let selected = this._tabset[index].selected;
    this._tabset.splice(index, 1);
    if (selected) {
      this.activeTabset(this._tabset[index])
    }
  }

  activeTabset (menu: MenuType) {
    this._tabset.forEach(item => {
      item.selected = false
      if (item.link === menu.link) {
        item.selected = true
      }
    })
    this._tabset = [...this._tabset]
    
    this._tabset$.next(this._tabset);
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
