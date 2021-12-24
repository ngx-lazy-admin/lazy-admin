import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface FieldType {
	label: string,
	icon: string,
	link: string,
	badge: string,
	selected: boolean,
	children: Array<FieldType>
}

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private _destroy$ = new Subject();
  private _menu$ = new BehaviorSubject<Array<FieldType|null>|null>(null);
  private _menuUrl = 'api/field';
  private _menus: Array<FieldType> = [];
  private _activeMenu: FieldType|null = null;

  private _tabset$ = new BehaviorSubject<Array<FieldType|null>|null>([]);
  private _tabset:  Array<FieldType> = [];
  public breadcrumb: Array<any> = [];

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
    this.breadcrumb = [];
    if (this._menus && this._menus instanceof Array && this._menus.length) {
      this._menus.some(item => {
        let menu = item.children.find(item => item.link === url) 
        if (menu) {
          this.breadcrumb = [item.label, menu.label]
          this.addTabset(menu)
          return true
        } else {
          return false
        }
      })
    }
    return true;
  }

  getMenu(): Observable<Array<FieldType>> {
    return this.http.get<Array<FieldType>>(this._menuUrl).pipe(tap(menu => {
      this._menus = menu;
      this._menu$.next(this._menus)
    }))
  }

  addTabset (menu: any) {
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
    let seletcted = this._tabset[index].selected;
    this._tabset.splice(index, 1);
    if (seletcted) {
      this.activeTabset(this._tabset[index])
    }
  }

  activeTabset (menu: FieldType) {
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