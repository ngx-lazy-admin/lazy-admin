import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { NzBreakpointService, siderResponsiveMap } from 'ng-zorro-antd/core/services';
import { NavigationStart, Router } from '@angular/router';

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
    private router: Router,
  ) { 
    window.document.body.style.setProperty('--sider-width', this.width + 'px')

    this.change$.subscribe(item => {
      if (!this.isDrawerVisible) {
        window.document.body.style.setProperty('--sider-width', '0px')
      } else if (this.isCollapsed){
        window.document.body.style.setProperty('--sider-width', '60px')
      } else {
        window.document.body.style.setProperty('--sider-width', '240px')
      }
    })

    this.breakpointService
      .subscribe(siderResponsiveMap, true)
      .subscribe((map: any) => {
        if (!map['sm']) {
          this.isDrawerVisible = true;
        } else {
          this.isDrawerVisible = false;
        }

        this.collapseChange(!map['xl']);
      });

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart  && this.isDrawerVisible === true) {
          this.isCollapsed = true;
          // this._isCollapsed$.next(this.isCollapsed);
        }
      });
  }

  collapseChange (collapsed: boolean) {
    this.isCollapsed = collapsed;
    this._isCollapsed$.next(this.isCollapsed);
  }
}
