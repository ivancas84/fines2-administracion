import { Component, OnInit } from '@angular/core';
import { ShowElementComponent } from '@component/show-element/show-element.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin, BehaviorSubject } from 'rxjs';
import { arrayColumn } from '@function/array-column';

@Component({
  selector: 'app-comision-grid',
  templateUrl: './comision-grid.component.html',
})
export class ComisionGridComponent extends ShowElementComponent implements OnInit {
  readonly entityName = 'comision';
    horario_$ = {};


  constructor(protected dd: DataDefinitionService) {
    super(); 
  }

  horario(idComision){
    /**
     * Evitar error produccion: "Object is possibly 'null'"
     * Simplificar acceso desde el template
     */
      return this.horario_$[idComision]
  }
  
  horariosComision(idsComisiones){
    this.dd.data("horarios_comision", JSON.stringify(idsComisiones)).subscribe(
      horario_ => {
        console.log(horario_)
        horario_.forEach(element => {
          var v = element["comision"];
          this.horario_$[v].next(element);
        });
      }
    )
  }
  
  ngOnInit(): void {
    this.data$.subscribe(
      comisiones => {
        console.log(comisiones.length);

        if(comisiones && comisiones.length){
          console.log(comisiones.length);
          var idsComisiones = arrayColumn(comisiones,"id");
          idsComisiones.forEach(id => { this.horario_$[id] = new BehaviorSubject(null); });
          this.horariosComision(idsComisiones);
        }
      }
    );
  }
}
