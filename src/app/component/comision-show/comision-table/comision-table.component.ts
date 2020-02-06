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

  readonly entityName = 'comision';

  constructor(protected dd: DataDefinitionService) {
    super();
  }

}
