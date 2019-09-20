import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _Nomina2DataDefinition extends DataDefinition {
  entity: string = 'nomina2';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('persona_' in row)
    && ('alumper_' in row['persona_'])
    ){
      this.stg.setItem('alumno' + row['persona_']['alumper_'].id, row['persona_']['alumper_']);
      delete row['persona_']['alumper_'];
    }
    if(('persona_' in row)
    ){
      this.stg.setItem('id_persona' + row['persona_'].id, row['persona_']);
      delete row['persona_'];
    }
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
    this.stg.setItem("nomina2" + row.id, row);
  }

}
