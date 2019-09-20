import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _DomicilioDataDefinition extends DataDefinition {
  entity: string = 'domicilio';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('sededom_' in row)
    ){
      this.stg.setItem('sede' + row['sededom_'].id, row['sededom_']);
      delete row['sededom_'];
    }
    this.stg.setItem("domicilio" + row.id, row);
  }

  label (row: { [index: string]: any }, dd: DataDefinitionService): string {
    let ret = "";
    if (row["calle"]) ret = ret.trim() + " " + row["calle"];

    if (row["numero"]) ret = ret.trim() + " " + row["numero"];

    if (row["barrio"]) ret = ret.trim() + " " + row["barrio"];

    return ret.trim();
  }
}
