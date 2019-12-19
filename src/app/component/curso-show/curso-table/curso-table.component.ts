import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-curso-table',
  templateUrl: './curso-table.component.html',
})
export class CursoTableComponent extends TableComponent {

  readonly entity = 'curso';

  constructor(protected dd: DataDefinitionService) {
    super();
  }

  ngOnInit(): void {
    this.data$.subscribe(
      response => {
        if(!isEmptyObject(response)) {
          var obs = [];
          var idsComision = [];    
          var idsCargaHoraria = [];    

          for(var i in response){
            if(response[i].comision) idsComision.push(response[i].comision);
            if(response[i].carga_horaria) idsCargaHoraria.push(response[i].carga_horaria);
          }

          if(idsComision.length) {
            var ob = this.dd.getAll("comision",idsComision);
            obs.push(ob);
          }

          if(idsCargaHoraria.length) {
            var ob = this.dd.getAll("carga_horaria",idsCargaHoraria);
            obs.push(ob);
          }

          if(obs.length){ forkJoin(obs).subscribe( () => this.load$.next(true)) } 
          else { this.load$.next(true) }
        }
      }
    );
  }

}
