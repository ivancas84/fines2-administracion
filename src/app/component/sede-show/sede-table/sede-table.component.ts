import { Component } from '@angular/core';
import { TableComponent } from 'src/app/core/component/table/table.component';
import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';

@Component({
  selector: 'app-sede-table',
  templateUrl: './sede-table.component.html',
})
export class SedeTableComponent extends TableComponent {

  constructor(protected dd: DataDefinitionService) {
    super(dd);
    this.entity = 'sede';
  }

}

