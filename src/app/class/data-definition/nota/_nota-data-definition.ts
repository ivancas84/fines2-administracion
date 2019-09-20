import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _NotaDataDefinition extends DataDefinition {
  entity: string = 'nota';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('profesor_' in row)
    && ('alumper_' in row['profesor_'])
    ){
      this.stg.setItem('alumno' + row['profesor_']['alumper_'].id, row['profesor_']['alumper_']);
      delete row['profesor_']['alumper_'];
    }
    if(('profesor_' in row)
    ){
      this.stg.setItem('id_persona' + row['profesor_'].id, row['profesor_']);
      delete row['profesor_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('plan_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    ){
      this.stg.setItem('plan' + row['curso_']['comision_']['comision_siguiente_']['division_']['plan_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['plan_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['plan_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('tipo_sede_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('domicilio_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('coordinador_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('coordinador_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('referente_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('referente_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('sede' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('tipo_sede_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('domicilio_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('coordinador_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('alumper_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('coordinador_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('referente_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('alumper_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('referente_' in row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['curso_']['comision_']['comision_siguiente_']['division_'])
    ){
      this.stg.setItem('sede' + row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']['sede_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_']['sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    && ('division_' in row['curso_']['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('division' + row['curso_']['comision_']['comision_siguiente_']['division_'].id, row['curso_']['comision_']['comision_siguiente_']['division_']);
      delete row['curso_']['comision_']['comision_siguiente_']['division_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('comision_siguiente_' in row['curso_']['comision_'])
    ){
      this.stg.setItem('comision' + row['curso_']['comision_']['comision_siguiente_'].id, row['curso_']['comision_']['comision_siguiente_']);
      delete row['curso_']['comision_']['comision_siguiente_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('plan_' in row['curso_']['comision_']['division_'])
    ){
      this.stg.setItem('plan' + row['curso_']['comision_']['division_']['plan_'].id, row['curso_']['comision_']['division_']['plan_']);
      delete row['curso_']['comision_']['division_']['plan_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['division_']['sede_'])
    && ('tipo_sede_' in row['curso_']['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['curso_']['comision_']['division_']['sede_']['dependencia_']['tipo_sede_'].id, row['curso_']['comision_']['division_']['sede_']['dependencia_']['tipo_sede_']);
      delete row['curso_']['comision_']['division_']['sede_']['dependencia_']['tipo_sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['division_']['sede_'])
    && ('domicilio_' in row['curso_']['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['curso_']['comision_']['division_']['sede_']['dependencia_']['domicilio_'].id, row['curso_']['comision_']['division_']['sede_']['dependencia_']['domicilio_']);
      delete row['curso_']['comision_']['division_']['sede_']['dependencia_']['domicilio_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['division_']['sede_'])
    && ('coordinador_' in row['curso_']['comision_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'].id, row['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_']);
      delete row['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['division_']['sede_'])
    && ('coordinador_' in row['curso_']['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_'].id, row['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_']);
      delete row['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['division_']['sede_'])
    && ('referente_' in row['curso_']['comision_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_'].id, row['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_']);
      delete row['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['division_']['sede_'])
    && ('referente_' in row['curso_']['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_'].id, row['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_']);
      delete row['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('dependencia_' in row['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('sede' + row['curso_']['comision_']['division_']['sede_']['dependencia_'].id, row['curso_']['comision_']['division_']['sede_']['dependencia_']);
      delete row['curso_']['comision_']['division_']['sede_']['dependencia_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('tipo_sede_' in row['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['curso_']['comision_']['division_']['sede_']['tipo_sede_'].id, row['curso_']['comision_']['division_']['sede_']['tipo_sede_']);
      delete row['curso_']['comision_']['division_']['sede_']['tipo_sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('domicilio_' in row['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['curso_']['comision_']['division_']['sede_']['domicilio_'].id, row['curso_']['comision_']['division_']['sede_']['domicilio_']);
      delete row['curso_']['comision_']['division_']['sede_']['domicilio_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('coordinador_' in row['curso_']['comision_']['division_']['sede_'])
    && ('alumper_' in row['curso_']['comision_']['division_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['comision_']['division_']['sede_']['coordinador_']['alumper_'].id, row['curso_']['comision_']['division_']['sede_']['coordinador_']['alumper_']);
      delete row['curso_']['comision_']['division_']['sede_']['coordinador_']['alumper_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('coordinador_' in row['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['comision_']['division_']['sede_']['coordinador_'].id, row['curso_']['comision_']['division_']['sede_']['coordinador_']);
      delete row['curso_']['comision_']['division_']['sede_']['coordinador_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('referente_' in row['curso_']['comision_']['division_']['sede_'])
    && ('alumper_' in row['curso_']['comision_']['division_']['sede_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['comision_']['division_']['sede_']['referente_']['alumper_'].id, row['curso_']['comision_']['division_']['sede_']['referente_']['alumper_']);
      delete row['curso_']['comision_']['division_']['sede_']['referente_']['alumper_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    && ('referente_' in row['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['comision_']['division_']['sede_']['referente_'].id, row['curso_']['comision_']['division_']['sede_']['referente_']);
      delete row['curso_']['comision_']['division_']['sede_']['referente_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    && ('sede_' in row['curso_']['comision_']['division_'])
    ){
      this.stg.setItem('sede' + row['curso_']['comision_']['division_']['sede_'].id, row['curso_']['comision_']['division_']['sede_']);
      delete row['curso_']['comision_']['division_']['sede_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    && ('division_' in row['curso_']['comision_'])
    ){
      this.stg.setItem('division' + row['curso_']['comision_']['division_'].id, row['curso_']['comision_']['division_']);
      delete row['curso_']['comision_']['division_'];
    }
    if(('curso_' in row)
    && ('comision_' in row['curso_'])
    ){
      this.stg.setItem('comision' + row['curso_']['comision_'].id, row['curso_']['comision_']);
      delete row['curso_']['comision_'];
    }
    if(('curso_' in row)
    && ('carga_horaria_' in row['curso_'])
    && ('asignatura_' in row['curso_']['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + row['curso_']['carga_horaria_']['asignatura_'].id, row['curso_']['carga_horaria_']['asignatura_']);
      delete row['curso_']['carga_horaria_']['asignatura_'];
    }
    if(('curso_' in row)
    && ('carga_horaria_' in row['curso_'])
    && ('plan_' in row['curso_']['carga_horaria_'])
    ){
      this.stg.setItem('plan' + row['curso_']['carga_horaria_']['plan_'].id, row['curso_']['carga_horaria_']['plan_']);
      delete row['curso_']['carga_horaria_']['plan_'];
    }
    if(('curso_' in row)
    && ('carga_horaria_' in row['curso_'])
    ){
      this.stg.setItem('carga_horaria' + row['curso_']['carga_horaria_'].id, row['curso_']['carga_horaria_']);
      delete row['curso_']['carga_horaria_'];
    }
    if(('curso_' in row)
    && ('toma_activa_' in row['curso_'])
    && ('profesor_' in row['curso_']['toma_activa_'])
    && ('alumper_' in row['curso_']['toma_activa_']['profesor_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['toma_activa_']['profesor_']['alumper_'].id, row['curso_']['toma_activa_']['profesor_']['alumper_']);
      delete row['curso_']['toma_activa_']['profesor_']['alumper_'];
    }
    if(('curso_' in row)
    && ('toma_activa_' in row['curso_'])
    && ('profesor_' in row['curso_']['toma_activa_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['toma_activa_']['profesor_'].id, row['curso_']['toma_activa_']['profesor_']);
      delete row['curso_']['toma_activa_']['profesor_'];
    }
    if(('curso_' in row)
    && ('toma_activa_' in row['curso_'])
    && ('reemplaza_' in row['curso_']['toma_activa_'])
    && ('alumper_' in row['curso_']['toma_activa_']['reemplaza_'])
    ){
      this.stg.setItem('alumno' + row['curso_']['toma_activa_']['reemplaza_']['alumper_'].id, row['curso_']['toma_activa_']['reemplaza_']['alumper_']);
      delete row['curso_']['toma_activa_']['reemplaza_']['alumper_'];
    }
    if(('curso_' in row)
    && ('toma_activa_' in row['curso_'])
    && ('reemplaza_' in row['curso_']['toma_activa_'])
    ){
      this.stg.setItem('id_persona' + row['curso_']['toma_activa_']['reemplaza_'].id, row['curso_']['toma_activa_']['reemplaza_']);
      delete row['curso_']['toma_activa_']['reemplaza_'];
    }
    if(('curso_' in row)
    && ('toma_activa_' in row['curso_'])
    ){
      this.stg.setItem('toma' + row['curso_']['toma_activa_'].id, row['curso_']['toma_activa_']);
      delete row['curso_']['toma_activa_'];
    }
    if(('curso_' in row)
    ){
      this.stg.setItem('curso' + row['curso_'].id, row['curso_']);
      delete row['curso_'];
    }
    if(('alumno_' in row)
    && ('alumper_' in row['alumno_'])
    ){
      this.stg.setItem('alumno' + row['alumno_']['alumper_'].id, row['alumno_']['alumper_']);
      delete row['alumno_']['alumper_'];
    }
    if(('alumno_' in row)
    ){
      this.stg.setItem('id_persona' + row['alumno_'].id, row['alumno_']);
      delete row['alumno_'];
    }
    this.stg.setItem("nota" + row.id, row);
  }

}
