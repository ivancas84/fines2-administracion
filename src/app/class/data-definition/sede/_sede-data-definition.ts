import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

export class _SedeDataDefinition extends DataDefinition {
  entity: string = 'sede';

  storage(row: { [index: string]: any }){
    console.log(row);
    if(!row) return;
    if(('dependencia_' in row)
    && ('tipo_sede_' in row['dependencia_'])
    ){
      this.stg.setItem('tipo_sede' + row['dependencia_']['tipo_sede_'].id, row['dependencia_']['tipo_sede_']);
      delete row['dependencia_']['tipo_sede_'];
    }
    if(('dependencia_' in row)
    && ('domicilio_' in row['dependencia_'])
    ){
      this.stg.setItem('domicilio' + row['dependencia_']['domicilio_'].id, row['dependencia_']['domicilio_']);
      delete row['dependencia_']['domicilio_'];
    }
    if(('dependencia_' in row)
    && ('coordinador_' in row['dependencia_'])
    && ('alumper_' in row['dependencia_']['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['dependencia_']['coordinador_']['alumper_'].id, row['dependencia_']['coordinador_']['alumper_']);
      delete row['dependencia_']['coordinador_']['alumper_'];
    }
    if(('dependencia_' in row)
    && ('coordinador_' in row['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['dependencia_']['coordinador_'].id, row['dependencia_']['coordinador_']);
      delete row['dependencia_']['coordinador_'];
    }
    if(('dependencia_' in row)
    && ('referente_' in row['dependencia_'])
    && ('alumper_' in row['dependencia_']['referente_'])
    ){
      this.stg.setItem('alumno' + row['dependencia_']['referente_']['alumper_'].id, row['dependencia_']['referente_']['alumper_']);
      delete row['dependencia_']['referente_']['alumper_'];
    }
    if(('dependencia_' in row)
    && ('referente_' in row['dependencia_'])
    ){
      this.stg.setItem('id_persona' + row['dependencia_']['referente_'].id, row['dependencia_']['referente_']);
      delete row['dependencia_']['referente_'];
    }
    if(('dependencia_' in row)
    ){
      this.stg.setItem('sede' + row['dependencia_'].id, row['dependencia_']);
      delete row['dependencia_'];
    }
    if(('tipo_sede_' in row)
    ){
      this.stg.setItem('tipo_sede' + row['tipo_sede_'].id, row['tipo_sede_']);
      delete row['tipo_sede_'];
    }
    if(('domicilio_' in row)
    ){
      this.stg.setItem('domicilio' + row['domicilio_'].id, row['domicilio_']);
      delete row['domicilio_'];
    }
    if(('coordinador_' in row)
    && ('alumper_' in row['coordinador_'])
    ){
      this.stg.setItem('alumno' + row['coordinador_']['alumper_'].id, row['coordinador_']['alumper_']);
      delete row['coordinador_']['alumper_'];
    }
    if(('coordinador_' in row)
    ){
      this.stg.setItem('id_persona' + row['coordinador_'].id, row['coordinador_']);
      delete row['coordinador_'];
    }
    if(('referente_' in row)
    && ('alumper_' in row['referente_'])
    ){
      this.stg.setItem('alumno' + row['referente_']['alumper_'].id, row['referente_']['alumper_']);
      delete row['referente_']['alumper_'];
    }
    if(('referente_' in row)
    ){
      this.stg.setItem('id_persona' + row['referente_'].id, row['referente_']);
      delete row['referente_'];
    }
    this.stg.setItem("sede" + row.id, row);
  }

  label (row: { [index: string]: any }, dd: DataDefinitionService): string {
    let ret = "";
    if (row["numero"]) ret = ret.trim() + " " + row["numero"];

    if (row["nombre"]) ret = ret.trim() + " " + row["nombre"];

    return ret.trim();
  }
}
