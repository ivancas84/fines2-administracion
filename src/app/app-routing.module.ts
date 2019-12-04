import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SedeShowComponent } from './component/sede-show/sede-show/sede-show.component';
import { TestComponent } from '@component/test/test.component';
import { SedeAdminComponent } from '@component/sede-admin/sede-admin/sede-admin.component';
import { TipoSedeAdminComponent } from '@component/tipo-sede-admin/tipo-sede-admin/tipo-sede-admin.component';
import { TipoSedeShowComponent } from '@component/tipo-sede-show/tipo-sede-show/tipo-sede-show.component';
import { CentroEducativoAdminComponent } from '@component/centro-educativo-admin/centro-educativo-admin/centro-educativo-admin.component';
import { CentroEducativoShowComponent } from '@component/centro-educativo-show/centro-educativo-show/centro-educativo-show.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { PersonaShowComponent } from '@component/persona-show/persona-show/persona-show.component';
import { CargoAdminComponent } from '@component/cargo-admin/cargo-admin/cargo-admin.component';
import { DesignacionAdminComponent } from '@component/designacion-admin/designacion-admin/designacion-admin.component';
import { PlanAdminComponent } from '@component/plan-admin/plan-admin/plan-admin.component';
import { PlanShowComponent } from '@component/plan-show/plan-show/plan-show.component';
import { ComisionAdminComponent } from '@component/comision-admin/comision-admin/comision-admin.component';
import { ComisionShowComponent } from '@component/comision-show/comision-show/comision-show.component';
import { AsignaturaAdminComponent } from '@component/asignatura-admin/asignatura-admin/asignatura-admin.component';

const routes: Routes = [
  { path: 'asignatura-admin', component: AsignaturaAdminComponent, pathMatch: 'full' },
  { path: 'cargo-admin', component: CargoAdminComponent, pathMatch: 'full' },
  { path: 'centro-educativo-admin', component: CentroEducativoAdminComponent, pathMatch: 'full' },
  { path: 'comision-admin', component: ComisionAdminComponent, pathMatch: 'full' },
  { path: 'comision-show', component: ComisionShowComponent, pathMatch: 'full' },
  { path: 'centro-educativo-show', component: CentroEducativoShowComponent, pathMatch: 'full' },
  { path: 'designacion-admin', component: DesignacionAdminComponent, pathMatch: 'full' },
  { path: 'sede-show', component: SedeShowComponent, pathMatch: 'full' },
  { path: 'sede-admin', component: SedeAdminComponent, pathMatch: 'full' },
  { path: 'tipo-sede-show', component: TipoSedeShowComponent, pathMatch: 'full' },
  { path: 'tipo-sede-admin', component: TipoSedeAdminComponent, pathMatch: 'full' },
  { path: 'plan-admin', component: PlanAdminComponent, pathMatch: 'full' },
  { path: 'plan-show', component: PlanShowComponent, pathMatch: 'full' },
  { path: 'persona-show', component: PersonaShowComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
