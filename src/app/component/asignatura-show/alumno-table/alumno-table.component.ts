import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-alumno-table',
  templateUrl: './alumno-table.component.html',
})
export class AlumnoTableComponent extends TableComponent {

  constructor(protected dd: DataDefinitionService) {
    super(dd);
    this.entity = 'alumno';
  }

}

