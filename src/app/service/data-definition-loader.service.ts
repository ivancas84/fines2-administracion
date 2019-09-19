import { Injectable } from '@angular/core';

import { DataDefinition } from '../core/service/data-definition/data-definition';
import { DataDefinitionService } from './data-definition/data-definition.service';

import { AlumnoDataDefinition } from './data-definition/alumno/alumno-data-definition';
import { AsignaturaDataDefinition } from './data-definition/asignatura/asignatura-data-definition';
import { CargaHorariaDataDefinition } from './data-definition/carga-horaria/carga-horaria-data-definition';
import { ClasificacionDataDefinition } from './data-definition/clasificacion/clasificacion-data-definition';
import { ClasificacionPlanDataDefinition } from './data-definition/clasificacion-plan/clasificacion-plan-data-definition';
import { ComisionDataDefinition } from './data-definition/comision/comision-data-definition';
import { CoordinadorDataDefinition } from './data-definition/coordinador/coordinador-data-definition';
import { CursoDataDefinition } from './data-definition/curso/curso-data-definition';
import { DiaDataDefinition } from './data-definition/dia/dia-data-definition';
import { DistribucionHorariaDataDefinition } from './data-definition/distribucion-horaria/distribucion-horaria-data-definition';
import { DivisionDataDefinition } from './data-definition/division/division-data-definition';
import { DomicilioDataDefinition } from './data-definition/domicilio/domicilio-data-definition';
import { HorarioDataDefinition } from './data-definition/horario/horario-data-definition';
import { IdPersonaDataDefinition } from './data-definition/id-persona/id-persona-data-definition';
import { InasistenciaDataDefinition } from './data-definition/inasistencia/inasistencia-data-definition';
import { LugarNacimientoDataDefinition } from './data-definition/lugar-nacimiento/lugar-nacimiento-data-definition';
import { NominaDataDefinition } from './data-definition/nomina/nomina-data-definition';
import { Nomina2DataDefinition } from './data-definition/nomina2/nomina2-data-definition';
import { NotaDataDefinition } from './data-definition/nota/nota-data-definition';
import { PermisoDataDefinition } from './data-definition/permiso/permiso-data-definition';
import { PersonaDataDefinition } from './data-definition/persona/persona-data-definition';
import { PlanDataDefinition } from './data-definition/plan/plan-data-definition';
import { ReferenteDataDefinition } from './data-definition/referente/referente-data-definition';
import { RolDataDefinition } from './data-definition/rol/rol-data-definition';
import { SedeDataDefinition } from './data-definition/sede/sede-data-definition';
import { TelefonoDataDefinition } from './data-definition/telefono/telefono-data-definition';
import { TipoSedeDataDefinition } from './data-definition/tipo-sede/tipo-sede-data-definition';
import { TomaDataDefinition } from './data-definition/toma/toma-data-definition';
import { UsuarioDataDefinition } from './data-definition/usuario/usuario-data-definition';


@Injectable({
  providedIn: 'root'
})
export class DataDefinitionLoaderService {
  get(name: string): DataDefinition {
    switch(name) {
        case "alumno": { return new AlumnoDataDefinition(dd); }
        case "asignatura": { return new AsignaturaDataDefinition(dd); }
        case "carga_horaria": { return new CargaHorariaDataDefinition(dd); }
        case "clasificacion": { return new ClasificacionDataDefinition(dd); }
        case "clasificacion_plan": { return new ClasificacionPlanDataDefinition(dd); }
        case "comision": { return new ComisionDataDefinition(dd); }
        case "coordinador": { return new CoordinadorDataDefinition(dd); }
        case "curso": { return new CursoDataDefinition(dd); }
        case "dia": { return new DiaDataDefinition(dd); }
        case "distribucion_horaria": { return new DistribucionHorariaDataDefinition(dd); }
        case "division": { return new DivisionDataDefinition(dd); }
        case "domicilio": { return new DomicilioDataDefinition(dd); }
        case "horario": { return new HorarioDataDefinition(dd); }
        case "id_persona": { return new IdPersonaDataDefinition(dd); }
        case "inasistencia": { return new InasistenciaDataDefinition(dd); }
        case "lugar_nacimiento": { return new LugarNacimientoDataDefinition(dd); }
        case "nomina": { return new NominaDataDefinition(dd); }
        case "nomina2": { return new Nomina2DataDefinition(dd); }
        case "nota": { return new NotaDataDefinition(dd); }
        case "permiso": { return new PermisoDataDefinition(dd); }
        case "persona": { return new PersonaDataDefinition(dd); }
        case "plan": { return new PlanDataDefinition(dd); }
        case "referente": { return new ReferenteDataDefinition(dd); }
        case "rol": { return new RolDataDefinition(dd); }
        case "sede": { return new SedeDataDefinition(dd); }
        case "telefono": { return new TelefonoDataDefinition(dd); }
        case "tipo_sede": { return new TipoSedeDataDefinition(dd); }
        case "toma": { return new TomaDataDefinition(dd); }
        case "usuario": { return new UsuarioDataDefinition(dd); }
     }
  }
}
