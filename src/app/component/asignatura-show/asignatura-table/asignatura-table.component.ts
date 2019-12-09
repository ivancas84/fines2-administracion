import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-asignatura-table',
  templateUrl: './asignatura-table.component.html',
})
export class AsignaturaTableComponent extends TableComponent {

  readonly entity = 'asignatura';

}

