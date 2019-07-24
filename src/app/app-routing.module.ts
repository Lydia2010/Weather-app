import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CitySearchComponent} from './views/city-search/city-search.component';

const routes: Routes = [

  {path: '', component: CitySearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
