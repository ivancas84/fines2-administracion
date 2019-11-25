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
  selector: 'app-sede-fieldset',
  templateUrl: './sede-fieldset.component.html',
})
export class SedeFieldsetComponent extends FieldsetComponent {

  entityName: string = 'sede';
  fieldsetName: string = 'sede';

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService) {
    super(fb, dd, validators);
  }

  initOptions(): void {
    let obs = [];      

    var ob = this.dd.all('tipo_sede', new Display);
    obs.push(ob);

    this.options = forkJoin(obs).pipe(
      map(
        options => {
          var o = {};
          o['tipo_sede'] = options[0];
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

          if(response.domicilio) {
            var ob = this.dd.getOrNull("domicilio",response.domicilio);
            obs.push(ob);
          }

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

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      id:'',
      numero: ['', {
        validators: Validators.required,
      }],
      nombre: ['', {
        validators: Validators.required,
      }],
      observaciones: ['', {
      }],
      // domicilio: ['', {
      //   validators: [Validators.required, this.validators.typeaheadSelection('domicilio')],
      // }],
      tipo_sede: ['', {
        validators: Validators.required,
      }],
      centro_educativo: ['', {
        validators: [Validators.required, this.validators.typeaheadSelection('centro_educativo')],
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get numero() { return this.fieldset.get('numero')}
  get nombre() { return this.fieldset.get('nombre')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get baja() { return this.fieldset.get('baja')}
  get domicilio() { return this.fieldset.get('domicilio')}
  get tipoSede() { return this.fieldset.get('tipo_sede')}
  get centroEducativo() { return this.fieldset.get('centro_educativo')}

}
