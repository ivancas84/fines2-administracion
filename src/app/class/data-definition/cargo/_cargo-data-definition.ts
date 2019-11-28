import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CargoDataDefinition extends DataDefinition {
  entity: string = 'cargo';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("cargo" + row.id, row);
  }

}
