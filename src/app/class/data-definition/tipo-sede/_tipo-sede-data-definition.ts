import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _TipoSedeDataDefinition extends DataDefinition {
  entity: string = 'tipo_sede';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("tipo_sede" + row.id, row);
  }

  label (row: { [index: string]: any }, dd: DataDefinitionService): string {
    let ret = "";
    if (row["descripcion"]) ret = ret.trim() + " " + row["descripcion"];

    return ret.trim();
  }
}
