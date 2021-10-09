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
      { path: 'system/list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule) },
      { path: 'system/modal', loadChildren: () => import('./pages/modal/modal.module').then(m => m.ModalModule) },
      { path: 'system/form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
      { path: 'exception', loadChildren: () => import('./pages/exception/exception.module').then(m => m.ExceptionModule) },
      { path: 'code', loadChildren: () => import('./pages/code/code.module').then(m => m.CodeModule) },
    ]
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/chart/chart.module').then(m => m.ChartModule)
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
