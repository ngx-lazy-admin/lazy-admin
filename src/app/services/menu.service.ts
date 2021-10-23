import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Menu } from '../interfaces/menu'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _destroy$ = new Subject();
  private _menu$ = new BehaviorSubject<Array<Menu|null>|null>(null);
  private _menuUrl = 'api/menu';
  private _menus: Array<Menu> = []
  private _activeMenu: Menu|null = null

  private _tabset$ = new BehaviorSubject<Array<Menu|null>|null>([]);
  private _tabset:  Array<Menu> = []

  constructor(
    private http: HttpClient,
  ) {}

  get change$() {
    return this._menu$.asObservable()
  }

  get tabsetChange$() {
    return this._tabset$.asObservable()
  }

  canActive(url: string): boolean {
    this._menus.some(item => {
      let menu = item.children.find(item => item.link === url) 
      if (menu) {
        this.addTabset(menu)
        return true
      } else {
        return false
      }
    })
    return true;
  }



  getMenu(): Observable<Array<Menu>> {
    return this.http.get<Array<Menu>>(this._menuUrl).pipe(tap(menu => {
      this._menus = menu;
      this._menu$.next(this._menus)
    }))
  }


  addTabset (menu: any) {
    if (!this._tabset.some(item => item.link === menu.link)) {
      this._tabset = [...this._tabset, menu]
      this._tabset$.next(this._tabset);
    } else {
      // this._tabset = this._tabset.map(item => item.selected)
      this.activeTabset(menu)
    }
  }

  activeTabset (menu: Menu) {
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
