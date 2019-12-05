import { Component } from '@angular/core';
import { TableComponent } from 'src/app/core/component/table/table.component';
import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';

@Component({
  selector: 'app-sede-table',
  templateUrl: './sede-table.component.html',
})
export class SedeTableComponent extends TableComponent {

  readonly entity = 'sede';

  /*initData(): void {
    this.data$.subscribe(
      response => {

        if(!isEmptyObject(response)) {
          var obs = [];

          if(response.centro_educativo) {
            var ob = this.dd.getOrNull("centro_educativo",response.centro_educativo);
            obs.push(ob);
          }

          if(obs.length){ forkJoin(obs).subscribe( () => this.fieldset.reset(response) ); } 
          else { this.fieldset.reset(response); }
        }
      } 
    );
  }*/
}

