import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';
import { Display } from '@class/display';
import { map } from 'rxjs/operators';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { ValidatorsService } from '@service/validators/validators.service';

@Component({
  selector: 'app-sede-search-aux',
  templateUrl: './sede-search-aux.component.html',
})
export class SedeSearchAuxComponent extends FieldsetComponent {
  readonly entityName = 'sede';
  readonly fieldsetName: string = 'aux';

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService) {
    super(fb, dd, validators);
  }
  
  formGroup() {
    let fg: FormGroup = this.fb.group({
      anio: [null],
      semestre: [null],
      modalidad: [null],
      centro_educativo: [null],
    });
    return fg;
  }

  initOptions(): void {
    let obs = [];      

    var ob = this.dd.all('modalidad', new Display);
    obs.push(ob);

    this.options = forkJoin(obs).pipe(
      map(
        options => {
          var o = {};
          o['modalidad'] = options[0];
          return o;
        }
      )
    );
  }

  initData(): void {
    this.data$.subscribe(
      response => {
        this.setDefaultValues();

        if(!isEmptyObject(response)) {
          var obs = [];

          if(response.centro_educativo) {
            var ob = this.dd.getOrNull("centro_educativo",response.centro_educativo);
            obs.push(ob);
          }

          if(obs.length){ forkJoin(obs).subscribe( () => this.fieldset.reset(response) ); } 
          else { this.fieldset.reset(response); }
        }
      } 
    );
  }

}
