import { AdminComponent } from '@component/admin/admin.component';
import { OnInit, Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { MessageService } from '@service/message/message.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { ReplaySubject, Observable, of } from 'rxjs';
import { isEmptyObject } from '@function/is-empty-object.function';
import { first } from 'rxjs/operators';
import { ToastService } from '@service/ng-bootstrap/toast.service';

@Component({
    selector: 'app-sede-admin',
    templateUrl: './sede-admin.component.html',
})
export class SedeAdminComponent extends AdminComponent implements OnInit {

  readonly entity: string = "sede";
  domicilio$ = new ReplaySubject();


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

  setDataFromStorage(formValues: any): void {
    var d = formValues.hasOwnProperty(this.entity)? formValues[this.entity] : null;
    this.data$.next(d); 
   
    var d = formValues.hasOwnProperty("domicilio")? formValues["domicilio"] : null;
    this.domicilio$.next(d);
  }
 

  setDataFromParams(params: any): void {
    if(isEmptyObject(params)) {
      this.data$.next(null);
      this.domicilio$.next(null);
      return;
    }
  
    this.dd.uniqueOrNull(this.entity, params).pipe(first()).subscribe(
      response => {
        if (response) this.data$.next(response);
        else this.data$.next(params);
  
        this.setDomicilio(response).subscribe(
          domicilio => {this.domicilio$.next(domicilio);},
          error => {console.log(error)}
        );
      }
    );
  }

  setDomicilio(obj): Observable<any> {
    if (!obj || !obj.domicilio) return of(null);
    return this.dd.getOrNull("domicilio", obj.domicilio);
  }
 
}