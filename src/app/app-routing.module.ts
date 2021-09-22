import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutBasicComponent } from './layout/basic/basic.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    // canActivate: [SimpleGuard],
    // canActivateChild: [SimpleGuard],
    data: {},
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/welcome' },
      { path: 'chart', loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartModule) },
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
      { path: 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule) },
      { path: 'modal', loadChildren: () => import('./pages/modal/modal.module').then(m => m.ModalModule) },
      { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
    ]
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartModule)
  },
  { path: 'exception', loadChildren: () => import('./pages/exception/exception.module').then(m => m.ExceptionModule) },
  { path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
