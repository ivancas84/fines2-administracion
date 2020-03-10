import { _CursoDataDefinition } from './_curso-data-definition';
import { ComisionDataDefinition } from './comision-data-definition';
import { CargaHorariaDataDefinition } from './carga-horaria-data-definition';

export class CursoDataDefinition extends _CursoDataDefinition { 
    label (id: string | number): string {
        var row = this.stg.getItem(this.entity + id);
        if(!row) return null;
    
        let ret = "";     
        if(row.comision) {        
          var e = new ComisionDataDefinition(this.stg, this.parser);
          ret = ret.trim() + " " + e.label(row.comision);
        }
        if(row.carga_horaria) {
          var carga_horaria = this.stg.getItem("carga_horaria" + row.carga_horaria);          
          var asignatura = this.stg.getItem("asignatura" + carga_horaria.asignatura);          
          ret = ret.trim() + " " + asignatura.nombre;
        }
        if (row["horario"]) ret = ret.trim() + " (" + row["horario"] + ")" ;
        return ret.trim();
      }


}
