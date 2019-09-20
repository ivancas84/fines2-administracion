import { Injectable } from '@angular/core';

import { SessionStorageService } from 'src/app/core/service/storage/session-storage.service';
import { ParserService } from 'src/app/core/service/parser/parser.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

import { AlumnoDataDefinition } from 'src/app/class/data-definition/alumno/alumno-data-definition';
import { AsignaturaDataDefinition } from 'src/app/class/data-definition/asignatura/asignatura-data-definition';
import { CargaHorariaDataDefinition } from 'src/app/class/data-definition/carga-horaria/carga-horaria-data-definition';
import { ClasificacionDataDefinition } from 'src/app/class/data-definition/clasificacion/clasificacion-data-definition';
import { ClasificacionPlanDataDefinition } from 'src/app/class/data-definition/clasificacion-plan/clasificacion-plan-data-definition';
import { ComisionDataDefinition } from 'src/app/class/data-definition/comision/comision-data-definition';
import { CoordinadorDataDefinition } from 'src/app/class/data-definition/coordinador/coordinador-data-definition';
import { CursoDataDefinition } from 'src/app/class/data-definition/curso/curso-data-definition';
import { DiaDataDefinition } from 'src/app/class/data-definition/dia/dia-data-definition';
import { DistribucionHorariaDataDefinition } from 'src/app/class/data-definition/distribucion-horaria/distribucion-horaria-data-definition';
import { DivisionDataDefinition } from 'src/app/class/data-definition/division/division-data-definition';
import { DomicilioDataDefinition } from 'src/app/class/data-definition/domicilio/domicilio-data-definition';
import { HorarioDataDefinition } from 'src/app/class/data-definition/horario/horario-data-definition';
import { IdPersonaDataDefinition } from 'src/app/class/data-definition/id-persona/id-persona-data-definition';
import { InasistenciaDataDefinition } from 'src/app/class/data-definition/inasistencia/inasistencia-data-definition';
import { LugarNacimientoDataDefinition } from 'src/app/class/data-definition/lugar-nacimiento/lugar-nacimiento-data-definition';
import { NominaDataDefinition } from 'src/app/class/data-definition/nomina/nomina-data-definition';
import { Nomina2DataDefinition } from 'src/app/class/data-definition/nomina2/nomina2-data-definition';
import { NotaDataDefinition } from 'src/app/class/data-definition/nota/nota-data-definition';
import { PermisoDataDefinition } from 'src/app/class/data-definition/permiso/permiso-data-definition';
import { PersonaDataDefinition } from 'src/app/class/data-definition/persona/persona-data-definition';
import { PlanDataDefinition } from 'src/app/class/data-definition/plan/plan-data-definition';
import { ReferenteDataDefinition } from 'src/app/class/data-definition/referente/referente-data-definition';
import { RolDataDefinition } from 'src/app/class/data-definition/rol/rol-data-definition';
import { SedeDataDefinition } from 'src/app/class/data-definition/sede/sede-data-definition';
import { TelefonoDataDefinition } from 'src/app/class/data-definition/telefono/telefono-data-definition';
import { TipoSedeDataDefinition } from 'src/app/class/data-definition/tipo-sede/tipo-sede-data-definition';
import { TomaDataDefinition } from 'src/app/class/data-definition/toma/toma-data-definition';
import { UsuarioDataDefinition } from 'src/app/class/data-definition/usuario/usuario-data-definition';

@Injectable({
  providedIn: 'root'
})
export class DataDefinitionLoaderService {

  constructor(protected stg: SessionStorageService, protected parser: ParserService){ }

  get(name: string): DataDefinition {
    switch(name) {
      case "alumno": { return new AlumnoDataDefinition(this.stg, this.parser); }
      case "asignatura": { return new AsignaturaDataDefinition(this.stg, this.parser); }
      case "carga_horaria": { return new CargaHorariaDataDefinition(this.stg, this.parser); }
      case "clasificacion": { return new ClasificacionDataDefinition(this.stg, this.parser); }
      case "clasificacion_plan": { return new ClasificacionPlanDataDefinition(this.stg, this.parser); }
      case "comision": { return new ComisionDataDefinition(this.stg, this.parser); }
      case "coordinador": { return new CoordinadorDataDefinition(this.stg, this.parser); }
      case "curso": { return new CursoDataDefinition(this.stg, this.parser); }
      case "dia": { return new DiaDataDefinition(this.stg, this.parser); }
      case "distribucion_horaria": { return new DistribucionHorariaDataDefinition(this.stg, this.parser); }
      case "division": { return new DivisionDataDefinition(this.stg, this.parser); }
      case "domicilio": { return new DomicilioDataDefinition(this.stg, this.parser); }
      case "horario": { return new HorarioDataDefinition(this.stg, this.parser); }
      case "id_persona": { return new IdPersonaDataDefinition(this.stg, this.parser); }
      case "inasistencia": { return new InasistenciaDataDefinition(this.stg, this.parser); }
      case "lugar_nacimiento": { return new LugarNacimientoDataDefinition(this.stg, this.parser); }
      case "nomina": { return new NominaDataDefinition(this.stg, this.parser); }
      case "nomina2": { return new Nomina2DataDefinition(this.stg, this.parser); }
      case "nota": { return new NotaDataDefinition(this.stg, this.parser); }
      case "permiso": { return new PermisoDataDefinition(this.stg, this.parser); }
      case "persona": { return new PersonaDataDefinition(this.stg, this.parser); }
      case "plan": { return new PlanDataDefinition(this.stg, this.parser); }
      case "referente": { return new ReferenteDataDefinition(this.stg, this.parser); }
      case "rol": { return new RolDataDefinition(this.stg, this.parser); }
      case "sede": { return new SedeDataDefinition(this.stg, this.parser); }
      case "telefono": { return new TelefonoDataDefinition(this.stg, this.parser); }
      case "tipo_sede": { return new TipoSedeDataDefinition(this.stg, this.parser); }
      case "toma": { return new TomaDataDefinition(this.stg, this.parser); }
      case "usuario": { return new UsuarioDataDefinition(this.stg, this.parser); }
    }
  }
}
