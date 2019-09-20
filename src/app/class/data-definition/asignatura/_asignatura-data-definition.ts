import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _AsignaturaDataDefinition extends DataDefinition {
  entity: string = 'asignatura';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("asignatura" + row.id, row);
  }

  label (row: { [index: string]: any }, dd: DataDefinitionService): string {
    let ret = "";
    if (row["nombre"]) ret = ret.trim() + " " + row["nombre"];

    return ret.trim();
  }
}
