import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, forkJoin, observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
import { MenuService } from '../services/menu.service'

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(
    private menuservice: MenuService
  ) {}

  // 身份验证
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('canActivate')
    return new Observable(observer => {
      forkJoin([
        this.menuservice.getMenu()
      ]).pipe(debounceTime(60)).subscribe((item) => {
        observer.next(true);
        observer.complete();
      }, () => {
        observer.error(false);
      });
    })
  }

  // 保护子路由
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('canActivateChild')
    return true;
  }
  // 处理未保存的更改
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('canDeactivate')
      
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('canLoad')

    return true;
  }
}
