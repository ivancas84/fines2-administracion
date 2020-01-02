import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-sede-table',
  templateUrl: './sede-table.component.html',
})
export class SedeTableComponent extends TableComponent {

  readonly entity = 'sede';

  constructor(protected dd: DataDefinitionService) {
    super();
  }

  ngOnInit(): void {
    this.data$.subscribe(
      response => {
        if(!isEmptyObject(response)) {
          var obs = [];
          var idsDomicilio = [];    
          var idsCentroEducativo = [];    
          var idsCoordinador = [];    

          for(var i in response){
            if(response[i].domicilio) idsDomicilio.push(response[i].domicilio);
            if(response[i].centro_educativo) idsCentroEducativo.push(response[i].centro_educativo);
            if(response[i].coordinador) idsCoordinador.push(response[i].coordinador);
          }

          if(idsDomicilio.length) {
            var ob = this.dd.getAll("domicilio",idsDomicilio);
            obs.push(ob);
          }

          if(idsCentroEducativo.length) {
            var ob = this.dd.getAll("centro_educativo",idsCentroEducativo);
            obs.push(ob);
          }

          if(idsCoordinador.length) {
            var ob = this.dd.getAll("persona",idsCoordinador);
            obs.push(ob);
          }

          if(obs.length){ forkJoin(obs).subscribe( () => this.load$.next(true)) } 
          else { this.load$.next(true) }
        }
      }
    );
  }

}
