import { DataDefinition } from 'src/app/core/class/data-definition';

export class _DiaDataDefinition extends DataDefinition {
  entity: string = 'dia';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("dia" + row.id, row);
  }

}
