import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutBasicComponent } from './layout/basic/basic.component';
import { ActivateGuard } from './guards/activate.guard';
import { ActivateChildGuard } from './guards/activate-child.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [ActivateGuard],
    canActivateChild: [ActivateChildGuard],
    data: {},
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'system' },
      { path: 'iframe', loadChildren: () => import('./pages/iframe/iframe.module').then(m => m.IframeModule) },
      { path: 'code', loadChildren: () => import('./pages/code/code.module').then(m => m.CodeModule) },
      // { path: '**', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule) },
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
  exports: [RouterModule],
})

export class AppRoutingModule { }
