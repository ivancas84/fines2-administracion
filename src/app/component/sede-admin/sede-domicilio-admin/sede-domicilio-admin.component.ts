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
import { Display } from '@class/display';

@Component({
    selector: 'app-sede-domicilio-admin',
    templateUrl: './sede-domicilio-admin.component.html',
})
export class SedeDomicilioAdminComponent extends AdminComponent implements OnInit {

  readonly entity: string = "sede";

  sync: any = {
    sede:{domicilio:false},
    domicilio:{},
    coordinador_:{sede:false},
  }

  domicilio$ = new ReplaySubject();
  coordinador_$ = new ReplaySubject();

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
      this.coordinador_$.next(null);
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

        this.setCoordinador_(response).subscribe(
          coordinador_ => {
            console.log(coordinador_);
            this.coordinador_$.next(coordinador_);},
          error => {console.log(error)}
        );
      }
    ); 
  }

  setDomicilio(sede): Observable<any> {
    if (!sede || !sede.domicilio) return of(null);
    return this.dd.getOrNull("domicilio", sede.domicilio);
  }

  setCoordinador_(sede): Observable<any> {
    console.log(sede);
    if (!sede || !sede.id) return of(null);
    var d: Display = new Display;
    d.condition.push(["sede", "=", sede.id]);
    return this.dd.all("coordinador", d);
  }

}