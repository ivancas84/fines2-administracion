import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-tipo-sede-table',
  templateUrl: './tipo-sede-table.component.html',
})
export class TipoSedeTableComponent extends TableComponent {

  readonly entity = 'tipo_sede';

}

