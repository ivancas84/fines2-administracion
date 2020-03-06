import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ShowComponent } from '@component/show/show.component';
import { first } from 'rxjs/operators';
import { arrayColumn } from '@function/array-column';
import { arrayCombineKey } from '@function/array-combine-key';

@Component({
  selector: 'app-comision-show',
  templateUrl: './comision-show.component.html',
})
export class ComisionShowComponent extends ShowComponent {

  readonly entityName: string = "comision";

  constructor(
    protected dd: DataDefinitionService, 
    protected route: ActivatedRoute, 
    protected router: Router
  ) {
    super(dd, route, router);
  }


  initData(){
    if(this.mode == "reload")
      this.getCount().pipe(first()).subscribe(
        count => { 
          if(this.collectionSize$.value != count) this.collectionSize$.next(count); 
        }
      );

    this.getData().pipe(first()).subscribe(
      rows => { 
        var idComisiones = arrayColumn(rows, "id");

        this.dd.data("horarios_comision",JSON.stringify(idComisiones)).subscribe(
          horarios => {
            horarios = arrayCombineKey(horarios, "comision")
            console.log(horarios);
          }
        );
        this.data$.next(rows); 
      }
    );

    this.mode = "reload";
  }


}

