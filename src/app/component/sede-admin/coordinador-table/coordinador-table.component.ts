import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
    
@Component({
  selector: 'app-coordinador-table',
  templateUrl: './coordinador-table.component.html',
})
export class CoordinadorTableComponent extends TableComponent {

  readonly entity = 'coordinador';

}

