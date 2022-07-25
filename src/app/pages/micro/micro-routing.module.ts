import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBlankComponent } from 'src/app/layouts/blank/blank.component';
import { IframeComponent } from './iframe/iframe.component';
import { QiankunComponent } from './qiankun/qiankun.component';
import { WuJieComponent } from './wujie/wujie.component';

const routes: Routes = [
  { 
    path: 'iframe', 
    component: LayoutBlankComponent,
    children: [
      {
        path: '**',
        component: IframeComponent,
      }
    ]
  },
  { 
    path: 'wujie', 
    component: LayoutBlankComponent,
    children: [
      {
        path: '**',
        component: WuJieComponent,
      }
    ]
  },
  { path: '**', component: QiankunComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
