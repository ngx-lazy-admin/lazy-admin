import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutBasicComponent } from './layout/basic/basic.component';
import { RouteGuardGuard } from  './guards/route-guard.guard';
import { ActivateGuard } from './guards/activate.guard';
import { ActivateChildGuard } from './guards/activate-child.guard';
import { LayoutBlankComponent } from './layout/blank/blank.component';
import { TabsComponent } from './layout/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [ActivateGuard],
    canActivateChild: [ActivateChildGuard],
    data: {},
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'system' },
      { path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule) },
      { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } 
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
