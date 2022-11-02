import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, forkJoin, observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
import { MenuService } from '../layouts';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private menuService: MenuService) {}

  // 初始化菜单
  // 用户信息
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('canActivate')
    return new Observable(observer => {
      forkJoin([this.menuService.getMenu()])
        .pipe(debounceTime(60))
        .subscribe(
          item => {
            observer.next(true);
            observer.complete();
          },
          () => {
            observer.next(true);
          }
        );
    });
  }
}
