import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-comision-table',
  templateUrl: './comision-table.component.html',
})
export class ComisionTableComponent extends TableComponent {

  readonly entity = 'comision';

  constructor(protected dd: DataDefinitionService) {
    super();
  }

  ngOnInit(): void {
    this.data$.subscribe(
      response => {
        if(!isEmptyObject(response)) {
          var obs = [];
          var idsSede = [];
          var idsCs = [];

          for(var i in response){
            if(response[i].sede) idsSede.push(response[i].sede);              
            if(response[i].comision_siguiente) idsCs.push(response[i].comision_siguiente);              
          }

          if(idsSede.length) {
            var ob = this.dd.getAll("sede",idsSede);
            obs.push(ob);
          }

          if(idsCs.length) {
            var ob = this.dd.getAll("comision",idsCs);
            obs.push(ob);
          }
          
          if(obs.length){ forkJoin(obs).subscribe( () => this.load$.next(true)) } 
          else { this.load$.next(true) }
        }
      }
    );
  }

}

