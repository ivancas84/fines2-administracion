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

  readonly entityName = 'sede';

  constructor(protected dd: DataDefinitionService) {
    super();
  }

}
