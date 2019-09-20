import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _PermisoDataDefinition extends DataDefinition {
  entity: string = 'permiso';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('rol_' in row)
    ){
      this.stg.setItem('rol' + row['rol_'].id, row['rol_']);
      delete row['rol_'];
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
    this.stg.setItem("permiso" + row.id, row);
  }

}
