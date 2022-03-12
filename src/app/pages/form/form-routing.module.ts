import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateChildGuard } from 'src/app/guards/activate-child.guard';
import { FormCanDeactivateGuard } from 'src/app/guards/form-can-deactivate.guard';
import { GlobalDeactivateGuard } from 'src/app/guards/global-deactivate.guard';
import { FormComponent } from './form.component';

const routes: Routes = [
  { 
    canActivateChild: [FormCanDeactivateGuard],
    canDeactivate: [GlobalDeactivateGuard],
    path: '', pathMatch: 'full', component: FormComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
