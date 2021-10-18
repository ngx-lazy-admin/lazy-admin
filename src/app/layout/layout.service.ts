import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _isCollapsed: boolean = false;
  constructor() { }

  private _isCollapsed$ = new BehaviorSubject<boolean>(false);

  // isCollapsed$ = this._isCollapsed$.asObservable();

  get change$ () {
    return this._isCollapsed$.asObservable();
  }


  collapsChange (collapsed: boolean) {
    this._isCollapsed = collapsed;
    this._isCollapsed$.next(this._isCollapsed);
  }
}
