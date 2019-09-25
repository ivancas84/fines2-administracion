import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeShowComponent } from './component/sede-show/sede-show/sede-show.component';


const routes: Routes = [
  { path: 'sede-show', component: SedeShowComponent, pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
