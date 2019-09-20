import { Component } from '@angular/core';
import { ShowComponent } from '../../core/component/show/show.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '../../core/service/data-definition/data-definition.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent extends ShowComponent {

  constructor(protected dd: DataDefinitionService, protected route: ActivatedRoute) {
    super(dd, route);
    this.entity = "sede";
  }

}

