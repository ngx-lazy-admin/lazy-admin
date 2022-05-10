import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _isCollapsed: boolean = false;
  private _isCollapsed$ = new BehaviorSubject<boolean>(false);

  get change$ () {
    return this._isCollapsed$.asObservable();
  }

  constructor() { }

  collapseChange (collapsed: boolean) {
    this._isCollapsed = collapsed;
    this._isCollapsed$.next(this._isCollapsed);
  }
}
