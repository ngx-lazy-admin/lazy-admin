import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { DeactivateGuard } from './guards/deactivate.guard';

const routes: Routes = [
  { 
    canDeactivate: [DeactivateGuard],
    path: '', pathMatch: 'full', component: FormComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
