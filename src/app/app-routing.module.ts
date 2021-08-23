import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./index/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'chart', loadChildren: () => import('./index/chart/chart.module').then(m => m.ChartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
