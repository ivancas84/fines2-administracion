import { Component } from '@angular/core';
import { ShowElementComponent } from '@component/show-element/show-element.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-comision-table',
  templateUrl: './comision-table.component.html',
})
export class ComisionTableComponent extends ShowElementComponent {

  readonly entityName = 'comision';

  constructor(protected dd: DataDefinitionService) {
    super();
  }

}
