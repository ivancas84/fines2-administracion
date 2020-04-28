import { OnInit, Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ToastService } from '@service/ng-bootstrap/toast.service';
import { FormBuilder } from '@angular/forms';
import { ValidatorsService } from '@service/validators/validators.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { AdminComponent } from '@component/admin/admin.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comision-detail',
  templateUrl: './comision-detail.component.html',
})
export class ComisionDetailComponent extends AdminComponent {

  readonly entityName: string = "comision";

  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute, 
    protected router: Router, 
    protected location: Location, 
    protected dd: DataDefinitionService, 
    protected toast: ToastService, 
    protected validators: ValidatorsService,
    protected storage: SessionStorageService, 
  ) {
    super(fb, route, router, location, dd, toast, validators, storage);
  }

  ngOnInit() {
    var s = this.route.queryParams.subscribe (
      params => { this.setDataFromParams(params); },
      error => { this.toast.showDanger(JSON.stringify(error)); }
    );
    this.subscriptions.add(s);
  }

  persist(): Observable<any> {
    /**
     * persistencia
     * Se define un metodo independiente para facilitar la redefinicion
     * @return "datos de respuesta (habitualmente array de logs)"
     */
    return this.dd.persist("horariosComision", this.serverData())
  }

}

