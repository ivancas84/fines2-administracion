import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeShowComponent } from './component/sede-show/sede-show/sede-show.component';
import { TestComponent } from '@component/test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent, pathMatch: 'full' },
  { path: 'sede-show', component: SedeShowComponent, pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
