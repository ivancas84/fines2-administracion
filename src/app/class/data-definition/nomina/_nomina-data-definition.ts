import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _NominaDataDefinition extends DataDefinition {
  entity: string = 'nomina';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('division_' in row)
    && ('plan_' in row['division_'])
    ){
      this.stg.setItem('plan' + row['division_']['plan_'].id, row['division_']['plan_']);
      delete row['division_']['plan_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('dependencia_' in row['division_']['sede_'])
    && ('tipo_sede_' in row['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['division_']['sede_']['dependencia_']['tipo_sede_'].id, row['division_']['sede_']['dependencia_']['tipo_sede_']);
      delete row['division_']['sede_']['dependencia_']['tipo_sede_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('dependencia_' in row['division_']['sede_'])
    && ('domicilio_' in row['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['division_']['sede_']['dependencia_']['domicilio_'].id, row['division_']['sede_']['dependencia_']['domicilio_']);
      delete row['division_']['sede_']['dependencia_']['domicilio_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('dependencia_' in row['division_']['sede_'])
    && ('coordinador_' in row['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['division_']['sede_']['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['division_']['sede_']['dependencia_']['coordinador_']['alumper_'].id, row['division_']['sede_']['dependencia_']['coordinador_']['alumper_']);
      delete row['division_']['sede_']['dependencia_']['coordinador_']['alumper_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('dependencia_' in row['division_']['sede_'])
    && ('coordinador_' in row['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['division_']['sede_']['dependencia_']['coordinador_'].id, row['division_']['sede_']['dependencia_']['coordinador_']);
      delete row['division_']['sede_']['dependencia_']['coordinador_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('dependencia_' in row['division_']['sede_'])
    && ('referente_' in row['division_']['sede_']['dependencia_'])
    && ('alumper_' in row['division_']['sede_']['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['division_']['sede_']['dependencia_']['referente_']['alumper_'].id, row['division_']['sede_']['dependencia_']['referente_']['alumper_']);
      delete row['division_']['sede_']['dependencia_']['referente_']['alumper_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('dependencia_' in row['division_']['sede_'])
    && ('referente_' in row['division_']['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['division_']['sede_']['dependencia_']['referente_'].id, row['division_']['sede_']['dependencia_']['referente_']);
      delete row['division_']['sede_']['dependencia_']['referente_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('dependencia_' in row['division_']['sede_'])
    ){
      this.stg.setItem('sede' + row['division_']['sede_']['dependencia_'].id, row['division_']['sede_']['dependencia_']);
      delete row['division_']['sede_']['dependencia_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('tipo_sede_' in row['division_']['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['division_']['sede_']['tipo_sede_'].id, row['division_']['sede_']['tipo_sede_']);
      delete row['division_']['sede_']['tipo_sede_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('domicilio_' in row['division_']['sede_'])
    ){
      this.stg.setItem('domicilio' + row['division_']['sede_']['domicilio_'].id, row['division_']['sede_']['domicilio_']);
      delete row['division_']['sede_']['domicilio_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('coordinador_' in row['division_']['sede_'])
    && ('alumper_' in row['division_']['sede_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['division_']['sede_']['coordinador_']['alumper_'].id, row['division_']['sede_']['coordinador_']['alumper_']);
      delete row['division_']['sede_']['coordinador_']['alumper_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('coordinador_' in row['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['division_']['sede_']['coordinador_'].id, row['division_']['sede_']['coordinador_']);
      delete row['division_']['sede_']['coordinador_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('referente_' in row['division_']['sede_'])
    && ('alumper_' in row['division_']['sede_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['division_']['sede_']['referente_']['alumper_'].id, row['division_']['sede_']['referente_']['alumper_']);
      delete row['division_']['sede_']['referente_']['alumper_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    && ('referente_' in row['division_']['sede_'])
    ){
      this.stg.setItem('id_persona' + row['division_']['sede_']['referente_'].id, row['division_']['sede_']['referente_']);
      delete row['division_']['sede_']['referente_'];
    }
    if(('division_' in row)
    && ('sede_' in row['division_'])
    ){
      this.stg.setItem('sede' + row['division_']['sede_'].id, row['division_']['sede_']);
      delete row['division_']['sede_'];
    }
    if(('division_' in row)
    ){
      this.stg.setItem('division' + row['division_'].id, row['division_']);
      delete row['division_'];
    }
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
    this.stg.setItem("nomina" + row.id, row);
  }

}
