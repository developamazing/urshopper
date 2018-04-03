import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { link } from 'fs';
import { MarketersComponent } from './marketers/marketers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ConsumerofferbundlesComponent } from './consumerofferbundles/consumerofferbundles.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '' ,component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'marketers', component:MarketersComponent},
  { path:'suppliers', component:SuppliersComponent},
  { path:'offerbundles', component:ConsumerofferbundlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
