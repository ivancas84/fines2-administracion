import { DataDefinition } from 'src/app/core/class/data-definition';

export class _AsignaturaDataDefinition extends DataDefinition {
  entity: string = 'asignatura';

  storage(row: { [index: string]: any }){
    if(!row) return;
    this.stg.setItem("asignatura" + row.id, row);
  }

}
