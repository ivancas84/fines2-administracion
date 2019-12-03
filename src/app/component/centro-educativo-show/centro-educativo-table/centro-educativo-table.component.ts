import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-centro-educativo-table',
  templateUrl: './centro-educativo-table.component.html',
})
export class CentroEducativoTableComponent extends TableComponent {

  readonly entity = 'centro_educativo';

}

