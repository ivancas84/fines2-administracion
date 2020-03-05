import { Component } from '@angular/core';
import { ShowElementComponent } from '@component/show-element/show-element.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-comision-grid',
  templateUrl: './comision-grid.component.html',
})
export class ComisionGridComponent extends ShowElementComponent {

  readonly entityName = 'comision';

  constructor(protected dd: DataDefinitionService) {
    super(); 
  }

}
