import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CoordinadorDataDefinition extends DataDefinition {
  entity: string = 'coordinador';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('sede_' in row)
    && ('dependencia_' in row['sede_'])
    && ('tipo_sede_' in row['sede_']['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['sede_']['dependencia_']['tipo_sede_'].id, row['sede_']['dependencia_']['tipo_sede_']);
      delete row['sede_']['dependencia_']['tipo_sede_'];
    }
    if(('sede_' in row)
    && ('dependencia_' in row['sede_'])
    && ('domicilio_' in row['sede_']['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['sede_']['dependencia_']['domicilio_'].id, row['sede_']['dependencia_']['domicilio_']);
      delete row['sede_']['dependencia_']['domicilio_'];
    }
    if(('sede_' in row)
    && ('dependencia_' in row['sede_'])
    && ('coordinador_' in row['sede_']['dependencia_'])
    && ('alumper_' in row['sede_']['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['sede_']['dependencia_']['coordinador_']['alumper_'].id, row['sede_']['dependencia_']['coordinador_']['alumper_']);
      delete row['sede_']['dependencia_']['coordinador_']['alumper_'];
    }
    if(('sede_' in row)
    && ('dependencia_' in row['sede_'])
    && ('coordinador_' in row['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['sede_']['dependencia_']['coordinador_'].id, row['sede_']['dependencia_']['coordinador_']);
      delete row['sede_']['dependencia_']['coordinador_'];
    }
    if(('sede_' in row)
    && ('dependencia_' in row['sede_'])
    && ('referente_' in row['sede_']['dependencia_'])
    && ('alumper_' in row['sede_']['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['sede_']['dependencia_']['referente_']['alumper_'].id, row['sede_']['dependencia_']['referente_']['alumper_']);
      delete row['sede_']['dependencia_']['referente_']['alumper_'];
    }
    if(('sede_' in row)
    && ('dependencia_' in row['sede_'])
    && ('referente_' in row['sede_']['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['sede_']['dependencia_']['referente_'].id, row['sede_']['dependencia_']['referente_']);
      delete row['sede_']['dependencia_']['referente_'];
    }
    if(('sede_' in row)
    && ('dependencia_' in row['sede_'])
    ){
      this.stg.setItem('sede' + row['sede_']['dependencia_'].id, row['sede_']['dependencia_']);
      delete row['sede_']['dependencia_'];
    }
    if(('sede_' in row)
    && ('tipo_sede_' in row['sede_'])
    ){
      this.stg.setItem('tipo_sede' + row['sede_']['tipo_sede_'].id, row['sede_']['tipo_sede_']);
      delete row['sede_']['tipo_sede_'];
    }
    if(('sede_' in row)
    && ('domicilio_' in row['sede_'])
    ){
      this.stg.setItem('domicilio' + row['sede_']['domicilio_'].id, row['sede_']['domicilio_']);
      delete row['sede_']['domicilio_'];
    }
    if(('sede_' in row)
    && ('coordinador_' in row['sede_'])
    && ('alumper_' in row['sede_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['sede_']['coordinador_']['alumper_'].id, row['sede_']['coordinador_']['alumper_']);
      delete row['sede_']['coordinador_']['alumper_'];
    }
    if(('sede_' in row)
    && ('coordinador_' in row['sede_'])
    ){
      this.stg.setItem('id_persona' + row['sede_']['coordinador_'].id, row['sede_']['coordinador_']);
      delete row['sede_']['coordinador_'];
    }
    if(('sede_' in row)
    && ('referente_' in row['sede_'])
    && ('alumper_' in row['sede_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['sede_']['referente_']['alumper_'].id, row['sede_']['referente_']['alumper_']);
      delete row['sede_']['referente_']['alumper_'];
    }
    if(('sede_' in row)
    && ('referente_' in row['sede_'])
    ){
      this.stg.setItem('id_persona' + row['sede_']['referente_'].id, row['sede_']['referente_']);
      delete row['sede_']['referente_'];
    }
    if(('sede_' in row)
    ){
      this.stg.setItem('sede' + row['sede_'].id, row['sede_']);
      delete row['sede_'];
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
    this.stg.setItem("coordinador" + row.id, row);
  }

}
