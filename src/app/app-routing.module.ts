import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComisionAdminComponent } from '@component/comision-admin/comision-admin/comision-admin.component';
import { ComisionDetailComponent } from '@component/comision-detail/comision-detail/comision-detail.component';
import { ConsolidadoAdminComponent } from '@component/consolidado-admin/consolidado-admin/consolidado-admin.component';
import { SedeAdminComponent } from '@component/sede-admin/sede-admin/sede-admin.component';
import { SedeShowComponent } from './component/sede-show/sede-show/sede-show.component';
import { EmailAdminComponent } from '@component/email-admin/email-admin/email-admin.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { TelefonoAdminComponent } from '@component/telefono-admin/telefono-admin/telefono-admin.component';
import { CalendarioAdminComponent } from '@component/calendario-admin/calendario-admin/calendario-admin.component';
import { DetallePersonaAdminComponent } from '@component/detalle-persona-admin/detalle-persona-admin/detalle-persona-admin.component';
import { PersonaShowComponent } from '@component/persona-show/persona-show/persona-show.component';
import { TomaAdminComponent } from '@component/toma-admin/toma-admin/toma-admin.component';

const routes: Routes = [
  { path: 'calendario-admin', component: CalendarioAdminComponent, pathMatch: 'full' },
  { path: 'comision-admin', component: ComisionAdminComponent, pathMatch: 'full' },
  { path: 'comision-detail', component: ComisionDetailComponent, pathMatch: 'full' },
  { path: 'consolidado-admin', component: ConsolidadoAdminComponent, pathMatch: 'full' },
  { path: 'detalle-persona-admin', component: DetallePersonaAdminComponent, pathMatch: 'full' },
  { path: 'email-admin', component: EmailAdminComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
  { path: 'persona-show', component: PersonaShowComponent, pathMatch: 'full' },
  { path: 'sede-admin', component: SedeAdminComponent, pathMatch: 'full' },
  { path: 'sede-show', component: SedeShowComponent, pathMatch: 'full' },
  { path: 'telefono-admin', component: TelefonoAdminComponent, pathMatch: 'full' },
  { path: 'toma-admin', component: TomaAdminComponent, pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
