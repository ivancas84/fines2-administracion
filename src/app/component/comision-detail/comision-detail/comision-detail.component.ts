import { OnInit, Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ToastService } from '@service/ng-bootstrap/toast.service';
import { DetailComponent } from '@component/detail/detail.component';

@Component({
  selector: 'app-comision-detail',
  templateUrl: './comision-detail.component.html',
})
export class ComisionDetailComponent extends DetailComponent {

  readonly entityName: string = "comision";

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected location: Location,
    protected dd: DataDefinitionService,
    protected toast: ToastService,
  ) {
    super(route, router, location, dd, toast);
  }
}

