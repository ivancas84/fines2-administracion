import { DataDefinition } from 'src/app/core/class/data-definition';

export class _ModalidadDataDefinition extends DataDefinition {
  entity: string = 'modalidad';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("modalidad" + row.id, row);
  }

}
