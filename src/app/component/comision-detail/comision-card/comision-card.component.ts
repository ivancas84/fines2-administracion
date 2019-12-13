import { Component } from '@angular/core';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { CardComponent } from '@component/card/card.component';

@Component({
  selector: 'app-comision-card',
  templateUrl: './comision-card.component.html',
})
export class ComisionCardComponent extends CardComponent {

  readonly entityName: string = "comision";

  constructor(protected dd: DataDefinitionService) {
    super(dd);
  }

}

