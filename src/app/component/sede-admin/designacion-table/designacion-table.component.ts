import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-designacion-table',
  templateUrl: './designacion-table.component.html',
})
export class DesignacionTableComponent extends TableComponent {

  readonly entity = 'designacion';

}

