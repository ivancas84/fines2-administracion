import { OnInit, Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ToastService } from '@service/ng-bootstrap/toast.service';
import { DetailComponent } from '@component/detail/detail.component';
import { Observable } from 'rxjs';
import { Display } from '@class/display';
import { map, mergeMap } from 'rxjs/operators';
import { arrayColumn } from '@function/array-column';

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

  curso_$: Observable<any>;
  curso_sin_horario_$: Observable<any>;
  
 
  
  ngOnInit(): void {
    var s = this.route.queryParams.subscribe (
      params => { this.setDataFromParams(params); },
      error => { this.toast.showDanger(JSON.stringify(error)); }
    );
    this.subscriptions.add(s);
    
    this.data$.subscribe(
      comision => {     
        if(comision && comision.hasOwnProperty("id") && comision["id"]) {
          var d = new Display();
          d.setParams({"cur_comision":comision["id"]});
          d.setOrder({"dia_dia":"asc", "hora_inicio":"asc"});
          this.curso_$ = this.dd.all("horario", d);
          
          /*this.curso_sin_horario_$ = this.curso_$.pipe(
            mergeMap(
              horario => {
                var idCursos = arrayColumn(horario,  "curso");
                var d = new Display();
                d.setOrder({"ch_asi_nombre":"asc"});
                d.setParams({"comision":comision["id"]});
                if(idCursos.length) d.addCondition(["id","!=", idCursos]);
                return this.dd.all("curso", d);
                
            }
          ));*/

     


        }
      }
    )
  }

}

