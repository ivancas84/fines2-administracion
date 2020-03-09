import { OnInit, Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ToastService } from '@service/ng-bootstrap/toast.service';
import { DetailComponent } from '@component/detail/detail.component';
import { Observable } from 'rxjs';
import { Display } from '@class/display';

@Component({
  selector: 'app-comision-detail',
  templateUrl: './comision-detail.component.html',
})
export class ComisionDetailComponent extends DetailComponent implements OnInit {

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

  curso$: Observable<any>;
  
 
  
  ngOnInit(): void {
    var s = this.route.queryParams.subscribe (
      params => { this.setDataFromParams(params); },
      error => { this.toast.showDanger(JSON.stringify(error)); }
    );
    this.subscriptions.add(s);
    
    this.data$.subscribe(
      comision => {     
        if(comision) {
          console.log(comision["id"]);
          var d = new Display();
          d.setParams({"comision":comision["id"]})
          console.log(d)
          this.curso$ = this.dd.all("curso", d);
        }
      }
    )
  }

}

