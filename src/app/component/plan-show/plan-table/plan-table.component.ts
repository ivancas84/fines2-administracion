import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-plan-table',
  templateUrl: './plan-table.component.html',
})
export class PlanTableComponent extends TableComponent {

  readonly entity = 'plan';

}

