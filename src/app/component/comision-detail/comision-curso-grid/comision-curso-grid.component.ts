import { Component } from '@angular/core';
import { ShowElementComponent } from '@component/show-element/show-element.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-comision-curso-grid',
  templateUrl: './comision-curso-grid.component.html',
})
export class ComisionCursoGridComponent extends ShowElementComponent {

  readonly entityName = 'curso';

  constructor(protected dd: DataDefinitionService) {
    super();
  }

}
