import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-persona-table',
  templateUrl: './persona-table.component.html',
})
export class PersonaTableComponent extends TableComponent {

  readonly entity = 'persona';

}

