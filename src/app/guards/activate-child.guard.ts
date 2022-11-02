import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, forkJoin, observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
import { MenuService } from '../layouts';

@Injectable({
  providedIn: 'root'
})
export class ActivateChildGuard implements CanActivateChild {
  constructor(private menuService: MenuService) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('ActivateChildGuard: canActivateChild')
    return this.menuService.canActive(state.url);
  }

  // 处理未保存的更改
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('ActivateChildGuard: canDeactivate')
    return true;
  }
}
