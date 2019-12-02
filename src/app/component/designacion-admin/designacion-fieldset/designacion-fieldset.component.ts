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
  selector: 'app-designacion-fieldset',
  templateUrl: './designacion-fieldset.component.html',
})
export class DesignacionFieldsetComponent extends FieldsetComponent {

  entityName: string = 'designacion';
  fieldsetName: string = 'designacion';

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService) {
    super(fb, dd, validators);
  }

  initData(): void {
    this.data$.subscribe(
      response => {
        if(!isEmptyObject(response)) {
          var obs = [];

          if(response.cargo) {
            var ob = this.dd.getOrNull("cargo",response.cargo);
            obs.push(ob);
          }

          if(response.sede) {
            var ob = this.dd.getOrNull("sede",response.sede);
            obs.push(ob);
          }

          if(response.persona) {
            var ob = this.dd.getOrNull("persona",response.persona);
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
      cargo: ['', {
        validators: [Validators.required, this.validators.typeaheadSelection('cargo')],
      }],
      sede: ['', {
        validators: [Validators.required, this.validators.typeaheadSelection('sede')],
      }],
      persona: ['', {
        validators: [Validators.required, this.validators.typeaheadSelection('persona')],
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get alta() { return this.fieldset.get('alta')}
  get baja() { return this.fieldset.get('baja')}
  get cargo() { return this.fieldset.get('cargo')}
  get sede() { return this.fieldset.get('sede')}
  get persona() { return this.fieldset.get('persona')}

}
