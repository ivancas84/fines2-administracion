import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Display } from '@class/display';
import { isEmptyObject } from '@function/is-empty-object.function';
import { FieldsetOptionalComponent } from '@component/fieldset-optional/fieldset-optional.component';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';

@Component({
  selector: 'app-domicilio-s-fieldset',
  templateUrl: './domicilio-s-fieldset.component.html',
})
export class DomicilioSFieldsetComponent extends FieldsetOptionalComponent {

  entityName: string = 'domicilio';
  fieldsetName: string = 'domicilio';

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService) {
    super(fb, dd, validators);
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      id:'',
      calle: ['', {
        validators: Validators.required,
      }],
      entre: ['', {
      }],
      numero: ['', {
        validators: Validators.required,
      }],
      piso: ['', {
      }],
      departamento: ['', {
      }],
      barrio: ['', {
      }],
      localidad: ['', {
        validators: Validators.required,
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get calle() { return this.fieldset.get('calle')}
  get entre() { return this.fieldset.get('entre')}
  get numero() { return this.fieldset.get('numero')}
  get piso() { return this.fieldset.get('piso')}
  get departamento() { return this.fieldset.get('departamento')}
  get barrio() { return this.fieldset.get('barrio')}
  get localidad() { return this.fieldset.get('localidad')}
}