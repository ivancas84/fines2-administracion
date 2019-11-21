import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeShowComponent } from './component/sede-show/sede-show/sede-show.component';
import { TestComponent } from '@component/test/test.component';
import { SedeAdminComponent } from '@component/sede-admin/sede-admin/sede-admin.component';
import { SedeDomicilioAdminComponent } from '@component/sede-admin/sede-domicilio-admin/sede-domicilio-admin.component';
import { TipoSedeAdminComponent } from '@component/tipo-sede-admin/tipo-sede-admin/tipo-sede-admin.component';
import { TipoSedeShowComponent } from '@component/tipo-sede-show/tipo-sede-show/tipo-sede-show.component';

const routes: Routes = [
  { path: 'test', component: TestComponent, pathMatch: 'full' },
  { path: 'sede-show', component: SedeShowComponent, pathMatch: 'full' },
  { path: 'sede-admin', component: SedeAdminComponent, pathMatch: 'full' },
  { path: 'sede-domicilio-admin', component: SedeDomicilioAdminComponent, pathMatch: 'full' },
  { path: 'tipo-sede-show', component: TipoSedeShowComponent, pathMatch: 'full' },
  { path: 'tipo-sede-admin', component: TipoSedeAdminComponent, pathMatch: 'full' },



];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
