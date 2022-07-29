import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeComponent } from './iframe/iframe.component';
import { QiankunComponent } from './qiankun/qiankun.component';
import { WuJieComponent } from './wujie/wujie.component';

const routes: Routes = [
  { 
    path: 'iframe', 
    children: [
      {
        path: '**',
        component: IframeComponent,
      }
    ]
  },
  { 
    path: 'wujie', 
    children: [
      {
        path: '**',
        component: WuJieComponent,
      }
    ]
  },
  { 
    path: 'qiankun', 
    children: [
      {
        path: '**',
        component: QiankunComponent,
      }
    ]
  },
  { path: '**', component: IframeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
