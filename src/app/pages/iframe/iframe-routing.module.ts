import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeComponent } from './iframe.component';
import { QiankunComponent } from './qiankun/qiankun.component';

const routes: Routes = [
  { path: 'iframe', component: IframeComponent },
  { path: 'qiankun', component: QiankunComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRoutingModule { }
