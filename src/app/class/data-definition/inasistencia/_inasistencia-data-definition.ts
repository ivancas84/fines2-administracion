import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _InasistenciaDataDefinition extends DataDefinition {
  entity: string = 'inasistencia';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('plan_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    ){
      this.stg.setItem('plan' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['plan_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['plan_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['plan_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('tipo_sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['tipo_sede_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('domicilio_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['domicilio_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('coordinador_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('coordinador_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['coordinador_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('referente_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']['alumper_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('referente_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']['referente_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('sede' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['dependencia_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('tipo_sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['tipo_sede_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('domicilio_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['domicilio_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('coordinador_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('alumper_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']['alumper_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('coordinador_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['coordinador_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('referente_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    && ('alumper_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_']['alumper_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    && ('referente_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']['referente_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'])
    ){
      this.stg.setItem('sede' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']['sede_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    && ('division_' in row['toma_']['curso_']['comision_']['comision_siguiente_'])
    ){
      this.stg.setItem('division' + row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']['division_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_']['division_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('comision_siguiente_' in row['toma_']['curso_']['comision_'])
    ){
      this.stg.setItem('comision' + row['toma_']['curso_']['comision_']['comision_siguiente_'].id, row['toma_']['curso_']['comision_']['comision_siguiente_']);
      delete row['toma_']['curso_']['comision_']['comision_siguiente_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('plan_' in row['toma_']['curso_']['comision_']['division_'])
    ){
      this.stg.setItem('plan' + row['toma_']['curso_']['comision_']['division_']['plan_'].id, row['toma_']['curso_']['comision_']['division_']['plan_']);
      delete row['toma_']['curso_']['comision_']['division_']['plan_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    && ('tipo_sede_' in row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['tipo_sede_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['tipo_sede_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['tipo_sede_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    && ('domicilio_' in row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['domicilio_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['domicilio_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['domicilio_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    && ('coordinador_' in row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_']['alumper_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    && ('coordinador_' in row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['coordinador_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    && ('referente_' in row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_']['alumper_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    && ('referente_' in row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']['referente_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('dependencia_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('sede' + row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['dependencia_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('tipo_sede_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['toma_']['curso_']['comision_']['division_']['sede_']['tipo_sede_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['tipo_sede_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['tipo_sede_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('domicilio_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['toma_']['curso_']['comision_']['division_']['sede_']['domicilio_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['domicilio_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['domicilio_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('coordinador_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    && ('alumper_' in row['toma_']['curso_']['comision_']['division_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['curso_']['comision_']['division_']['sede_']['coordinador_']['alumper_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['coordinador_']['alumper_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['coordinador_']['alumper_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('coordinador_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['curso_']['comision_']['division_']['sede_']['coordinador_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['coordinador_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['coordinador_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('referente_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    && ('alumper_' in row['toma_']['curso_']['comision_']['division_']['sede_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['curso_']['comision_']['division_']['sede_']['referente_']['alumper_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['referente_']['alumper_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['referente_']['alumper_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    && ('referente_' in row['toma_']['curso_']['comision_']['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['curso_']['comision_']['division_']['sede_']['referente_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']['referente_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_']['referente_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    && ('sede_' in row['toma_']['curso_']['comision_']['division_'])
    ){
      this.stg.setItem('sede' + row['toma_']['curso_']['comision_']['division_']['sede_'].id, row['toma_']['curso_']['comision_']['division_']['sede_']);
      delete row['toma_']['curso_']['comision_']['division_']['sede_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    && ('division_' in row['toma_']['curso_']['comision_'])
    ){
      this.stg.setItem('division' + row['toma_']['curso_']['comision_']['division_'].id, row['toma_']['curso_']['comision_']['division_']);
      delete row['toma_']['curso_']['comision_']['division_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('comision_' in row['toma_']['curso_'])
    ){
      this.stg.setItem('comision' + row['toma_']['curso_']['comision_'].id, row['toma_']['curso_']['comision_']);
      delete row['toma_']['curso_']['comision_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('carga_horaria_' in row['toma_']['curso_'])
    && ('asignatura_' in row['toma_']['curso_']['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + row['toma_']['curso_']['carga_horaria_']['asignatura_'].id, row['toma_']['curso_']['carga_horaria_']['asignatura_']);
      delete row['toma_']['curso_']['carga_horaria_']['asignatura_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('carga_horaria_' in row['toma_']['curso_'])
    && ('plan_' in row['toma_']['curso_']['carga_horaria_'])
    ){
      this.stg.setItem('plan' + row['toma_']['curso_']['carga_horaria_']['plan_'].id, row['toma_']['curso_']['carga_horaria_']['plan_']);
      delete row['toma_']['curso_']['carga_horaria_']['plan_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    && ('carga_horaria_' in row['toma_']['curso_'])
    ){
      this.stg.setItem('carga_horaria' + row['toma_']['curso_']['carga_horaria_'].id, row['toma_']['curso_']['carga_horaria_']);
      delete row['toma_']['curso_']['carga_horaria_'];
    }
    if(('toma_' in row)
    && ('curso_' in row['toma_'])
    ){
      this.stg.setItem('curso' + row['toma_']['curso_'].id, row['toma_']['curso_']);
      delete row['toma_']['curso_'];
    }
    if(('toma_' in row)
    && ('profesor_' in row['toma_'])
    && ('alumper_' in row['toma_']['profesor_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['profesor_']['alumper_'].id, row['toma_']['profesor_']['alumper_']);
      delete row['toma_']['profesor_']['alumper_'];
    }
    if(('toma_' in row)
    && ('profesor_' in row['toma_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['profesor_'].id, row['toma_']['profesor_']);
      delete row['toma_']['profesor_'];
    }
    if(('toma_' in row)
    && ('reemplaza_' in row['toma_'])
    && ('alumper_' in row['toma_']['reemplaza_'])
    ){
      this.stg.setItem('alumno' + row['toma_']['reemplaza_']['alumper_'].id, row['toma_']['reemplaza_']['alumper_']);
      delete row['toma_']['reemplaza_']['alumper_'];
    }
    if(('toma_' in row)
    && ('reemplaza_' in row['toma_'])
    ){
      this.stg.setItem('id_persona' + row['toma_']['reemplaza_'].id, row['toma_']['reemplaza_']);
      delete row['toma_']['reemplaza_'];
    }
    if(('toma_' in row)
    ){
      this.stg.setItem('toma' + row['toma_'].id, row['toma_']);
      delete row['toma_'];
    }
    this.stg.setItem("inasistencia" + row.id, row);
  }

}
