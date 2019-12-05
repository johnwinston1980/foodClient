import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListProvidersComponent } from '../app/providers/list-providers/list-providers.component';

const routes: Routes = [
  { path: '', component: ListProvidersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
