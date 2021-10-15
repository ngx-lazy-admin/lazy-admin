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
  private _menu$ = new BehaviorSubject<Menu|null>(null);
  private _menuUrl = 'api/menu';

  private _tabset$ = new BehaviorSubject<string[]>([]);
  private _tabset: object[] = []

  constructor(
    private http: HttpClient,
  ) { }

  get menu$() {
    return this._menu$.asObservable()
  }

  get tabset$() {
    return this._tabset$.asObservable()
  }

  getMenu(): Observable<Menu> {
    return this.http.get<Menu>(this._menuUrl).pipe(tap(Menu => {
      this._menu$.next(Menu)
    }))
  }


  addTabset (item: any) {
    this._tabset = [...this._tabset, item]
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
