import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CentroEducativoDataDefinition extends DataDefinition {
  entity: string = 'centro_educativo';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('domicilio_' in row)
    ){
      this.stg.setItem('domicilio' + row['domicilio_'].id, row['domicilio_']);
      delete row['domicilio_'];
    }
    this.stg.setItem("centro_educativo" + row.id, row);
  }

  label (row: { [index: string]: any }, dd: DataDefinitionService): string {
    let ret = "";
    if (row["nombre"]) ret = ret.trim() + " " + row["nombre"];

    return ret.trim();
  }
}
