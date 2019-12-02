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
  selector: 'app-persona-fieldset',
  templateUrl: './persona-fieldset.component.html',
})
export class PersonaFieldsetComponent extends FieldsetComponent {

  entityName: string = 'persona';
  fieldsetName: string = 'persona';

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService) {
    super(fb, dd, validators);
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      id:'',
      nombres: ['', {
        validators: Validators.required,
      }],
      apellidos: ['', {
      }],
      fecha_nacimiento: ['', {
      }],
      numero_documento: ['', {
        validators: Validators.required,
        asyncValidators: this.validators.unique('numero_documento', 'persona'),
      }],
      cuil: ['', {
        asyncValidators: this.validators.unique('cuil', 'persona'),
      }],
      email: ['', {
      }],
      genero: ['', {
      }],
      apodo: ['', {
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get nombres() { return this.fieldset.get('nombres')}
  get apellidos() { return this.fieldset.get('apellidos')}
  get fechaNacimiento() { return this.fieldset.get('fecha_nacimiento')}
  get numeroDocumento() { return this.fieldset.get('numero_documento')}
  get cuil() { return this.fieldset.get('cuil')}
  get email() { return this.fieldset.get('email')}
  get genero() { return this.fieldset.get('genero')}
  get apodo() { return this.fieldset.get('apodo')}
  get alta() { return this.fieldset.get('alta')}

}