import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _ClasificacionPlanDataDefinition extends DataDefinition {
  entity: string = 'clasificacion_plan';

  storage(row: { [index: string]: any }){
    if(!row) return;
    if(('clasificacion_' in row)
    ){
      this.stg.setItem('clasificacion' + row['clasificacion_'].id, row['clasificacion_']);
      delete row['clasificacion_'];
    }
    if(('plan_' in row)
    ){
      this.stg.setItem('plan' + row['plan_'].id, row['plan_']);
      delete row['plan_'];
    }
    this.stg.setItem("clasificacion_plan" + row.id, row);
  }

}
