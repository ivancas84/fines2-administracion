import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _LugarNacimientoDataDefinition extends DataDefinition {
  entity: string = 'lugar_nacimiento';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("lugar_nacimiento" + row.id, row);
  }

}
