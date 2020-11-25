import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCompComponent } from './main-comp/main-comp.component';



const routes: Routes = [
  { path: "main",component:MainCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
