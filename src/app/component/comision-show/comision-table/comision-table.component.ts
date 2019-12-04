import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-comision-table',
  templateUrl: './comision-table.component.html',
})
export class ComisionTableComponent extends TableComponent {

  readonly entity = 'comision';

}

