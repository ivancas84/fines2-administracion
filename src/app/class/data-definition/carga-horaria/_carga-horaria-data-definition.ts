import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CargaHorariaDataDefinition extends DataDefinition {
  entity: string = 'carga_horaria';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('plan_' in row)
    ){
      this.stg.setItem('plan' + row['plan_'].id, row['plan_']);
      delete row['plan_'];
    }
    if(('asignatura_' in row)
    ){
      this.stg.setItem('asignatura' + row['asignatura_'].id, row['asignatura_']);
      delete row['asignatura_'];
    }
    this.stg.setItem("carga_horaria" + row.id, row);
  }

}
