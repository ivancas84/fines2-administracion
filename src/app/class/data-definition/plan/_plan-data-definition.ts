import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _PlanDataDefinition extends DataDefinition {
  entity: string = 'plan';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("plan" + row.id, row);
  }

  label (row: { [index: string]: any }, dd: DataDefinitionService): string {
    let ret = "";
    if (row["orientacion"]) ret = ret.trim() + " " + row["orientacion"];

    if (row["resolucion"]) ret = ret.trim() + " " + row["resolucion"];

    return ret.trim();
  }
}
