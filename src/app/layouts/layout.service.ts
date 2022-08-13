import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NzBreakpointService, siderResponsiveMap } from 'ng-zorro-antd/core/services';

@Injectable()
export class LayoutService {

  isCollapsed: boolean = false;
  collapsedType: 'menu-unfold' | 'menu-fold' = 'menu-fold'
  isDrawerVisible: boolean = false;
  width: number = 240;
  collapsedWidth: number = 64;

  private _isCollapsed$ = new BehaviorSubject<boolean>(false);

  get change$ () {
    return this._isCollapsed$.asObservable();
  }

  constructor(
    private breakpointService: NzBreakpointService,
  ) { 
    window.document.body.style.setProperty('--sizebar-width', this.width + 'px')

    this.breakpointService
    .subscribe(siderResponsiveMap, true)
    .subscribe((map: any) => {
      if (map['xs']) {
        this.isDrawerVisible = false;
      } else {
        this.isDrawerVisible = true;
      }

      this.collapseChange(!map['xl']);
    });
  }

  collapseChange (collapsed: boolean) {
    this.isCollapsed = collapsed;

    this._isCollapsed$.next(this.isCollapsed);
  }
}
