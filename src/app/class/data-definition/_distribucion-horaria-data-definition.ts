import { DataDefinition } from 'src/app/core/class/data-definition';

export class _DistribucionHorariaDataDefinition extends DataDefinition {
  entity: string = 'distribucion_horaria';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('carga_horaria_' in rowCloned)
    && ('plan_' in rowCloned['carga_horaria_'])
    ){
      this.stg.setItem('plan' + rowCloned['carga_horaria_']['plan_'].id, rowCloned['carga_horaria_']['plan_']);
      delete rowCloned['carga_horaria_']['plan_'];
    }
    if(('carga_horaria_' in rowCloned)
    && ('asignatura_' in rowCloned['carga_horaria_'])
    ){
      this.stg.setItem('asignatura' + rowCloned['carga_horaria_']['asignatura_'].id, rowCloned['carga_horaria_']['asignatura_']);
      delete rowCloned['carga_horaria_']['asignatura_'];
    }
    if(('carga_horaria_' in rowCloned)
    ){
      this.stg.setItem('carga_horaria' + rowCloned['carga_horaria_'].id, rowCloned['carga_horaria_']);
      delete rowCloned['carga_horaria_'];
    }
    this.stg.setItem("distribucion_horaria" + rowCloned.id, rowCloned);
  }

}
