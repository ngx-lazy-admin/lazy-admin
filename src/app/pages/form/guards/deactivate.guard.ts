import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CacheService } from 'src/app/services/router/cache.service';
import { FormComponent } from '../form.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<unknown> {

  constructor(
    private routeCache: CacheService,
  ) {}
  
  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.routeCache.set(currentState.url, {
        ...this.routeCache.get(currentState.url),
        model: component.model,
        options: component?.options
      })

    return true;
  }
  
}
