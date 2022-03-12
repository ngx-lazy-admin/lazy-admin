import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormComponent } from '../pages/form/form.component';
import { CacheService } from '../services/router/cache.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalDeactivateGuard implements CanDeactivate<unknown> {
  // 当进行表单填报之类的操作时，因为会涉及到一个提交的动作，当用户没有点击保存按钮就离开时，最好能暂停，
  // 对用户进行一个友好性的提示，由用户选择后续的操作

  constructor(
    private routeCache: CacheService
  ) {}

  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.routeCache.set(currentState.url, {
      ...this.routeCache.get(currentState.url),
      model: component?.model,
      options: component?.options
    })
    return true;
  }
  
}
