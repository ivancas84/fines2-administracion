import { AdminComponent } from '@component/admin/admin.component';
import { OnInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { MessageService } from '@service/message/message.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-tipo-sede-admin',
  templateUrl: './tipo-sede-admin.component.html',
})
export class TipoSedeAdminComponent extends AdminComponent implements OnInit {

  readonly entity: string = "tipo_sede";

  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute, 
    protected router: Router, 
    protected location: Location, 
    protected dd: DataDefinitionService, 
    protected message: MessageService, 
    protected validators: ValidatorsService,
    protected storage: SessionStorageService, 
  ) {
    super(fb, route, router, location, dd, message, validators, storage);
  }

}

