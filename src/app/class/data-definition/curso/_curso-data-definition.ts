import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CursoDataDefinition extends DataDefinition {
  entity: string = 'curso';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('plan_' in row['comision_']['comision_siguiente_']['division_'])
    ){
      this.stg.setItem('plan' + row['comision_']['comision_siguiente_']['division_']['plan_'].id, row['comision_']['comision_siguiente_']['division_']['plan_']);
      delete row['comision_']['comision_siguiente_']['division_']['plan_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('tipo_sede_' in row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('domicilio_' in row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('coordinador_' in row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('coordinador_' in row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('referente_' in row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('referente_' in row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('sede' + row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('tipo_sede_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('domicilio_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('coordinador_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('alumper_' in row['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('coordinador_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('referente_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('alumper_' in row['comision_']['comision_siguiente_']['division_']['sede_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    && ('referente_' in row['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['comision_']['comision_siguiente_']['division_']['sede_']['referente_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']['referente_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_']['referente_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    && ('sede_' in row['comision_']['comision_siguiente_']['division_'])
    ){
      this.stg.setItem('sede' + row['comision_']['comision_siguiente_']['division_']['sede_'].id, row['comision_']['comision_siguiente_']['division_']['sede_']);
      delete row['comision_']['comision_siguiente_']['division_']['sede_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    && ('division_' in row['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('division' + row['comision_']['comision_siguiente_']['division_'].id, row['comision_']['comision_siguiente_']['division_']);
      delete row['comision_']['comision_siguiente_']['division_'];
    }
    if(('comision_' in row)
    && ('comision_siguiente_' in row['comision_'])
    ){
      this.stg.setItem('comision' + row['comision_']['comision_siguiente_'].id, row['comision_']['comision_siguiente_']);
      delete row['comision_']['comision_siguiente_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('plan_' in row['comision_']['division_'])
    ){
      this.stg.setItem('plan' + row['comision_']['division_']['plan_'].id, row['comision_']['division_']['plan_']);
      delete row['comision_']['division_']['plan_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('dependencia_' in row['comision_']['division_']['sede_'])
    && ('tipo_sede_' in row['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['comision_']['division_']['sede_']['dependencia_']['tipo_sede_'].id, row['comision_']['division_']['sede_']['dependencia_']['tipo_sede_']);
      delete row['comision_']['division_']['sede_']['dependencia_']['tipo_sede_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('dependencia_' in row['comision_']['division_']['sede_'])
    && ('domicilio_' in row['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['comision_']['division_']['sede_']['dependencia_']['domicilio_'].id, row['comision_']['division_']['sede_']['dependencia_']['domicilio_']);
      delete row['comision_']['division_']['sede_']['dependencia_']['domicilio_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('dependencia_' in row['comision_']['division_']['sede_'])
    && ('coordinador_' in row['comision_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['comision_']['division_']['sede_']['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'].id, row['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_']);
      delete row['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('dependencia_' in row['comision_']['division_']['sede_'])
    && ('coordinador_' in row['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['comision_']['division_']['sede_']['dependencia_']['coordinador_'].id, row['comision_']['division_']['sede_']['dependencia_']['coordinador_']);
      delete row['comision_']['division_']['sede_']['dependencia_']['coordinador_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('dependencia_' in row['comision_']['division_']['sede_'])
    && ('referente_' in row['comision_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['comision_']['division_']['sede_']['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_'].id, row['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_']);
      delete row['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('dependencia_' in row['comision_']['division_']['sede_'])
    && ('referente_' in row['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['comision_']['division_']['sede_']['dependencia_']['referente_'].id, row['comision_']['division_']['sede_']['dependencia_']['referente_']);
      delete row['comision_']['division_']['sede_']['dependencia_']['referente_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('dependencia_' in row['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('sede' + row['comision_']['division_']['sede_']['dependencia_'].id, row['comision_']['division_']['sede_']['dependencia_']);
      delete row['comision_']['division_']['sede_']['dependencia_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('tipo_sede_' in row['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['comision_']['division_']['sede_']['tipo_sede_'].id, row['comision_']['division_']['sede_']['tipo_sede_']);
      delete row['comision_']['division_']['sede_']['tipo_sede_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('domicilio_' in row['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['comision_']['division_']['sede_']['domicilio_'].id, row['comision_']['division_']['sede_']['domicilio_']);
      delete row['comision_']['division_']['sede_']['domicilio_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('coordinador_' in row['comision_']['division_']['sede_'])
    && ('alumper_' in row['comision_']['division_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['comision_']['division_']['sede_']['coordinador_']['alumper_'].id, row['comision_']['division_']['sede_']['coordinador_']['alumper_']);
      delete row['comision_']['division_']['sede_']['coordinador_']['alumper_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('coordinador_' in row['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['comision_']['division_']['sede_']['coordinador_'].id, row['comision_']['division_']['sede_']['coordinador_']);
      delete row['comision_']['division_']['sede_']['coordinador_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('referente_' in row['comision_']['division_']['sede_'])
    && ('alumper_' in row['comision_']['division_']['sede_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['comision_']['division_']['sede_']['referente_']['alumper_'].id, row['comision_']['division_']['sede_']['referente_']['alumper_']);
      delete row['comision_']['division_']['sede_']['referente_']['alumper_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    && ('referente_' in row['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['comision_']['division_']['sede_']['referente_'].id, row['comision_']['division_']['sede_']['referente_']);
      delete row['comision_']['division_']['sede_']['referente_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    && ('sede_' in row['comision_']['division_'])
    ){
      this.stg.setItem('sede' + row['comision_']['division_']['sede_'].id, row['comision_']['division_']['sede_']);
      delete row['comision_']['division_']['sede_'];
    }
    if(('comision_' in row)
    && ('division_' in row['comision_'])
    ){
      this.stg.setItem('division' + row['comision_']['division_'].id, row['comision_']['division_']);
      delete row['comision_']['division_'];
    }
    if(('comision_' in row)
    ){
      this.stg.setItem('comision' + row['comision_'].id, row['comision_']);
      delete row['comision_'];
    }
    if(('carga_horaria_' in row)
    && ('asignatura_' in row['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + row['carga_horaria_']['asignatura_'].id, row['carga_horaria_']['asignatura_']);
      delete row['carga_horaria_']['asignatura_'];
    }
    if(('carga_horaria_' in row)
    && ('plan_' in row['carga_horaria_'])
    ){
      this.stg.setItem('plan' + row['carga_horaria_']['plan_'].id, row['carga_horaria_']['plan_']);
      delete row['carga_horaria_']['plan_'];
    }
    if(('carga_horaria_' in row)
    ){
      this.stg.setItem('carga_horaria' + row['carga_horaria_'].id, row['carga_horaria_']);
      delete row['carga_horaria_'];
    }
    if(('toma_activa_' in row)
    && ('profesor_' in row['toma_activa_'])
    && ('alumper_' in row['toma_activa_']['profesor_'])
    ){
      this.stg.setItem('alumno' + row['toma_activa_']['profesor_']['alumper_'].id, row['toma_activa_']['profesor_']['alumper_']);
      delete row['toma_activa_']['profesor_']['alumper_'];
    }
    if(('toma_activa_' in row)
    && ('profesor_' in row['toma_activa_'])
    ){
      this.stg.setItem('id_persona' + row['toma_activa_']['profesor_'].id, row['toma_activa_']['profesor_']);
      delete row['toma_activa_']['profesor_'];
    }
    if(('toma_activa_' in row)
    && ('reemplaza_' in row['toma_activa_'])
    && ('alumper_' in row['toma_activa_']['reemplaza_'])
    ){
      this.stg.setItem('alumno' + row['toma_activa_']['reemplaza_']['alumper_'].id, row['toma_activa_']['reemplaza_']['alumper_']);
      delete row['toma_activa_']['reemplaza_']['alumper_'];
    }
    if(('toma_activa_' in row)
    && ('reemplaza_' in row['toma_activa_'])
    ){
      this.stg.setItem('id_persona' + row['toma_activa_']['reemplaza_'].id, row['toma_activa_']['reemplaza_']);
      delete row['toma_activa_']['reemplaza_'];
    }
    if(('toma_activa_' in row)
    ){
      this.stg.setItem('toma' + row['toma_activa_'].id, row['toma_activa_']);
      delete row['toma_activa_'];
    }
    this.stg.setItem("curso" + row.id, row);
  }

}
