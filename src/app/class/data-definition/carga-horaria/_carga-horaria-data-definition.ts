import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _CargaHorariaDataDefinition extends DataDefinition {
  entity: string = 'carga_horaria';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('asignatura_' in row)
    ){
      this.stg.setItem('asignatura' + row['asignatura_'].id, row['asignatura_']);
      delete row['asignatura_'];
    }
    if(('plan_' in row)
    ){
      this.stg.setItem('plan' + row['plan_'].id, row['plan_']);
      delete row['plan_'];
    }
    this.stg.setItem("carga_horaria" + row.id, row);
  }

  label (row: { [index: string]: any }, dd: DataDefinitionService): string {
    let ret = "";
    if(row.asignatura) ret = ret.trim() + " " + dd.label("asignatura", row.asignatura);
    if(row.plan) ret = ret.trim() + " " + dd.label("plan", row.plan);
    return ret.trim();
  }
}
