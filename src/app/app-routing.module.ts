import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComisionAdminComponent } from '@component/comision-admin/comision-admin/comision-admin.component';
import { ConsolidadoAdminComponent } from '@component/consolidado-admin/consolidado-admin/consolidado-admin.component';
import { SedeAdminComponent } from '@component/sede-admin/sede-admin/sede-admin.component';
import { SedeShowComponent } from './component/sede-show/sede-show/sede-show.component';

const routes: Routes = [
  { path: 'comision-admin', component: ComisionAdminComponent, pathMatch: 'full' },
  { path: 'consolidado-admin', component: ConsolidadoAdminComponent, pathMatch: 'full' },
  { path: 'sede-admin', component: SedeAdminComponent, pathMatch: 'full' },  
  { path: 'sede-show', component: SedeShowComponent, pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
