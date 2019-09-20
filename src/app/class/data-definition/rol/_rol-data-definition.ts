import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _RolDataDefinition extends DataDefinition {
  entity: string = 'rol';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("rol" + row.id, row);
  }

}
