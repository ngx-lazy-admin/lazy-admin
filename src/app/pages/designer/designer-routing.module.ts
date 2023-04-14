import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignerComponent } from './designer.component';

const routes: Routes = [
  {
    canDeactivate: [],
    path: '',
    pathMatch: 'full',
    component: DesignerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
