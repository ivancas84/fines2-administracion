import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Display } from '@class/display';
import { isEmptyObject } from '@function/is-empty-object.function';

@Component({
  selector: 'app-comision-fieldset',
  templateUrl: './comision-fieldset.component.html',
})
export class ComisionFieldsetComponent extends FieldsetComponent {

  entityName: string = 'comision';
  fieldsetName: string = 'comision';

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService) {
    super(fb, dd, validators);
  }

  initOptions(): void {
    let obs = [];      

    var ob = this.dd.all('plan', new Display);
    obs.push(ob);

    this.options = forkJoin(obs).pipe(
      map(
        options => {
          var o = {};
          o['plan'] = options[0];
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

          if(response.sede) {
            var ob = this.dd.getOrNull("sede",response.sede);
            obs.push(ob);
          }

          if(response.comision_siguiente) {
            var ob = this.dd.getOrNull("comision",response.comision_siguiente);
            obs.push(ob);
          }

          if(obs.length){ forkJoin(obs).subscribe( () => this.fieldset.reset(response) ); } 
          else { this.fieldset.reset(response); }
        }
      }
    );
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      id:null,
      turno: [null, {
      }],
      division: [null, {
        validators: [Validators.required],
      }],
      anio: [null, {
      }],
      semestre: [null, {
      }],
      comentario: [null, {
      }],
      autorizada: false,
      apertura: false,
      publicada: false,
      fecha_anio: [null, {
        validators: [this.validators.minYear('2000'), this.validators.year()],
      }],
      fecha_semestre: [null, {
      }],
      observaciones: [null, {
      }],
      sede: [null, {
        validators: [this.validators.typeaheadSelection('sede'), Validators.required],
      }],
      plan: [null, {
        validators: [Validators.required],
      }],
      comision_siguiente: [null, {
        validators: [this.validators.typeaheadSelection('comision')],
      }],
    }, {
      asyncValidators: [this.validators.uniqueMultiple('comision', ['division', 'sede'])],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get turno() { return this.fieldset.get('turno')}
  get division() { return this.fieldset.get('division')}
  get anio() { return this.fieldset.get('anio')}
  get semestre() { return this.fieldset.get('semestre')}
  get comentario() { return this.fieldset.get('comentario')}
  get autorizada() { return this.fieldset.get('autorizada')}
  get apertura() { return this.fieldset.get('apertura')}
  get publicada() { return this.fieldset.get('publicada')}
  get fechaAnio() { return this.fieldset.get('fecha_anio')}
  get fechaSemestre() { return this.fieldset.get('fecha_semestre')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get alta() { return this.fieldset.get('alta')}
  get sede() { return this.fieldset.get('sede')}
  get plan() { return this.fieldset.get('plan')}
  get comisionSiguiente() { return this.fieldset.get('comision_siguiente')}

}
