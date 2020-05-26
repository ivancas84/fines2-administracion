import { Component, OnInit } from '@angular/core';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { BehaviorSubject } from 'rxjs';
import { Display } from '@class/display';
import { arrayColumn } from '@function/array-column';
import { ShowElementComponent } from '@component/show-element/show-element.component';

@Component({
  selector: 'app-consolidado-table',
  templateUrl: './consolidado-table.component.html',
})
export class ConsolidadoTableComponent extends ShowElementComponent implements OnInit {

  readonly entityName = 'comision';
  curso_$ = {};
  toma_$ = {};

  constructor(protected dd: DataDefinitionService) {
    super();
  }

  ngOnInit(): void {
    this.data$.subscribe(
      data => {
        if(data && data.length){
          var ids = arrayColumn(data,"id");
          ids.forEach(id => {
            this.curso_$[id] = new BehaviorSubject([]);
          });

          var display = new Display();
          display.addParam("comision",ids);
          this.dd.all("curso", display).subscribe(
            curso_ => {
              curso_.forEach(element => {
                var v = element["comision"];
                var v_ = this.curso_$[v].value;
                v_.push(element);
                this.curso_$[v].next(v_);
              });

              var ids = arrayColumn(curso_,"id");
              ids.forEach(id => {
                this.toma_$[id] = new BehaviorSubject([]);
              });

              var display = new Display();
              display.addParam("curso",ids);
              this.dd.all("toma", display).subscribe(
                toma_ => {
                  toma_.forEach(element => {
                    var idcurso = element["curso"];
                    var v = this.toma_$[idcurso].value;
                    v.push(element);
                    this.toma_$[idcurso].next(v);
                  });
                }
              );

            }
          )
        }
      }
    );
  }

  toma(idcurso){
  /**
   * Se define un metodo para evitar el error de pasaje a produccion: Object is possibly 'null'
   */
    var t;
    this.toma_$[idcurso].subscribe(
      toma => { t = toma; }
    );
    return t;
  }



}
