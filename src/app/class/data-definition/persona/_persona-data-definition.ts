import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _PersonaDataDefinition extends DataDefinition {
  entity: string = 'persona';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('lugar_nacimiento_' in row)
    ){
      this.stg.setItem('lugar_nacimiento' + row['lugar_nacimiento_'].id, row['lugar_nacimiento_']);
      delete row['lugar_nacimiento_'];
    }
    if(('id_persona_' in row)
    && ('alumper_' in row['id_persona_'])
    ){
      this.stg.setItem('alumno' + row['id_persona_']['alumper_'].id, row['id_persona_']['alumper_']);
      delete row['id_persona_']['alumper_'];
    }
    if(('id_persona_' in row)
    ){
      this.stg.setItem('id_persona' + row['id_persona_'].id, row['id_persona_']);
      delete row['id_persona_'];
    }
    if(('domicilio_' in row)
    && ('sededom_' in row['domicilio_'])
    ){
      this.stg.setItem('sede' + row['domicilio_']['sededom_'].id, row['domicilio_']['sededom_']);
      delete row['domicilio_']['sededom_'];
    }
    if(('domicilio_' in row)
    ){
      this.stg.setItem('domicilio' + row['domicilio_'].id, row['domicilio_']);
      delete row['domicilio_'];
    }
    this.stg.setItem("persona" + row.id, row);
  }

}
