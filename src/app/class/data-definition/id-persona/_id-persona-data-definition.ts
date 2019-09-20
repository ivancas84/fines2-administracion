import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _IdPersonaDataDefinition extends DataDefinition {
  entity: string = 'id_persona';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('alumper_' in row)
    ){
      this.stg.setItem('alumno' + row['alumper_'].id, row['alumper_']);
      delete row['alumper_'];
    }
    this.stg.setItem("id_persona" + row.id, row);
  }

  label (row: { [index: string]: any }, dd: DataDefinitionService): string {
    let ret = "";
    if (row["nombres"]) ret = ret.trim() + " " + row["nombres"];

    if (row["apellidos"]) ret = ret.trim() + " " + row["apellidos"];

    if (row["numero_documento"]) ret = ret.trim() + " " + row["numero_documento"];

    return ret.trim();
  }
}
