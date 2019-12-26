import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchComponent } from '@component/search/search.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';
import { Display } from '@class/display';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sede-search',
  templateUrl: './sede-search.component.html',
})
export class SedeSearchComponent extends SearchComponent {
  readonly entityName = 'sede';

  constructor(protected fb: FormBuilder, protected dd: DataDefinitionService, protected router: Router) {
    super(fb, dd, router);
  }



  initOptions(): void {
    let obs = [];      

    var ob = this.dd.all('modalidad', new Display);
    obs.push(ob);

    this.options = forkJoin(obs).pipe(
      map(
        options => {
          var o = {};
          o['modalidad'] = options[0];
          return o;
        }
      )
    );
  }

  /*initData() {
    var obs = [];
 
    for(let i = 0; i < this.condition.length; i++){
      if((this.condition[i][0] == "id") && !isEmptyObject(this.condition[i][2])) {
        var ob = this.dd.getOrNull(this.entityName,this.condition[i][2]);
        obs.push(ob);
      }

      if((this.condition[i][0] == "domicilio") && !isEmptyObject(this.condition[i][2])) {     
        var ob = this.dd.getOrNull("domicilio",this.condition[i][2]);
        obs.push(ob);
      }

      if((this.condition[i][0] == "centro_educativo") && !isEmptyObject(this.condition[i][2])) {     
        var ob = this.dd.getOrNull("centro_educativo",this.condition[i][2]);
        obs.push(ob);
      }

    }
    if(obs.length){ forkJoin(obs).subscribe( () => this.initForm() ); }
    else { this.initForm() }
  }*/

}
