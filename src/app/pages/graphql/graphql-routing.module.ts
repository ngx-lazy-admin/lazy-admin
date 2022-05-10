import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphqlComponent } from './graphql.component';

const routes: Routes = [
  { 
    canDeactivate: [],
    path: '', pathMatch: 'full', component: GraphqlComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphqlRoutingModule { }
