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
      { path: '', pathMatch: 'full', redirectTo: '/dashboard/workplace' },

      { path: 'system', pathMatch: 'full', redirectTo: '/system/user' },
      

      { path: 'system/user', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      { path: 'system/user', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      { path: 'system/menu', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      { path: 'system/role', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      { path: 'system/form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },

      // { path: 'dashboard', pathMatch: 'full', redirectTo: '/dashboard/workplace' },
      // { path: 'dashboard/workplace', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      // { path: 'dashboard/monitor', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      // { path: 'dashboard/analysis', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },

      // { path: 'form', pathMatch: 'full', redirectTo: '/form/basic' },
      // { path: 'form/basic', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      // { path: 'form/step', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      // { path: 'form/advanced', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },


      // { path: '**', component: PageNotFoundComponent }
      { path: '**', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },


    ]
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartModule)
  },
  {
    path: 'form',
    component: LayoutBlankComponent,
    data: {},
    children: [
      {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)
      },
    ]
  },
  

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
