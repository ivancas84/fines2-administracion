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

  readonly entityName = 'curso';

  constructor(protected dd: DataDefinitionService) {
    super();
  }

}
