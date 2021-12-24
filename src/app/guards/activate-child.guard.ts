import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, forkJoin, observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
import { MenuService } from '../api/menu/menu.services'

@Injectable({
  providedIn: 'root'
})
export class ActivateChildGuard implements CanActivateChild {

  constructor(
    private menuservice: MenuService
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.menuservice.canActive(state.url)
  }
}
