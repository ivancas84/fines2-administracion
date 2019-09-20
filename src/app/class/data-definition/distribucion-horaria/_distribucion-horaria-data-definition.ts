import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _DistribucionHorariaDataDefinition extends DataDefinition {
  entity: string = 'distribucion_horaria';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('carga_horaria_' in row)
    && ('asignatura_' in row['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + row['carga_horaria_']['asignatura_'].id, row['carga_horaria_']['asignatura_']);
      delete row['carga_horaria_']['asignatura_'];
    }
    if(('carga_horaria_' in row)
    && ('plan_' in row['carga_horaria_'])
    ){
      this.stg.setItem('plan' + row['carga_horaria_']['plan_'].id, row['carga_horaria_']['plan_']);
      delete row['carga_horaria_']['plan_'];
    }
    if(('carga_horaria_' in row)
    ){
      this.stg.setItem('carga_horaria' + row['carga_horaria_'].id, row['carga_horaria_']);
      delete row['carga_horaria_'];
    }
    this.stg.setItem("distribucion_horaria" + row.id, row);
  }

}
