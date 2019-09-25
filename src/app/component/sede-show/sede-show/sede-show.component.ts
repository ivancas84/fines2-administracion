import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowComponent } from 'src/app/core/component/show/show.component';
import { DataDefinitionService } from 'src/app/core/service/data-definition/data-definition.service';


@Component({
  selector: 'app-sede-show',
  templateUrl: './sede-show.component.html',
})
export class SedeShowComponent extends ShowComponent {

  constructor(
    protected dd: DataDefinitionService, 
    protected route: ActivatedRoute, 
    protected router: Router
  ) {
    super(dd, route, router);
    this.entity = "sede";
  }

}

