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
  initFilters(condition) {
    var obs = [];
 
    for(let i = 0; i < condition.length; i++){
      if((condition[i][0] == "id") && !isEmptyObject(condition[i][2])) {
        var ob = this.dd.getOrNull(this.entityName,condition[i][2]);
        obs.push(ob);
      }

      if((condition[i][0] == "domicilio") && !isEmptyObject(condition[i][2])) {     
        var ob = this.dd.getOrNull("domicilio",condition[i][2]);
        obs.push(ob);
      }

      if((condition[i][0] == "centro_educativo") && !isEmptyObject(condition[i][2])) {     
        var ob = this.dd.getOrNull("centro_educativo",condition[i][2]);
        obs.push(ob);
      }

    }
    return obs;
  }

}
