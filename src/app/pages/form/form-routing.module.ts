import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', component: FormComponent, 
  },

  {
    path: 'dashboard/analysis', pathMatch: 'full', component: FormComponent    
  },
  {
    path: 'monitor', pathMatch: 'full', component: FormComponent,  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
