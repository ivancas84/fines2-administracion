import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-carga-horaria-table',
  templateUrl: './carga-horaria-table.component.html',
})
export class CargaHorariaTableComponent extends TableComponent {

  readonly entity = 'carga_horaria';

}

