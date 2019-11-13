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
    if(this.dd.isSync('dependencia', this.sync)){
      let obs = [];
      var ob = this.dd.all('tipo_sede', new Display);
      obs.push(ob);
    
      this.options = forkJoin(obs).pipe(
        map(
          options => {
            var opt = {};
            opt["tipo_sede"] = options[0];
            return opt;
          }          
        )
      )
    }
  }

  /*initDependencia(sede){ //asignar al storage la dependencia
    if(!sede) return of(null);
    else if(!sede.dependencia) return of(null)
    else return this.dd.getOrNull("sede",sede.dependencia);
  }*/

  initData(){    
    this.data$.subscribe(
      response => {
        if(!isEmptyObject(response)) {
          var obs = [];
          
          if(this.dd.isSync('dependencia', this.sync) && response.dependencia) {
            var ob = this.dd.getOrNull("sede",response.dependencia);
            obs.push(ob);
          }

          if(this.dd.isSync('domicilio', this.sync) && response.domicilio) {
            var ob = this.dd.getOrNull("domicilio",response.domicilio);
            obs.push(ob);
          }

          if(obs.length){ forkJoin(obs).subscribe( () => this.fieldset.reset(response) ); } 
          else { this.fieldset.reset(response); }
        }
      }
    );
  }

  formGroup(){
    let fg: FormGroup = this.fb.group({
      id:'',
      numero: ['', {
      }],
      nombre: ['', {
        validators: Validators.required,
      }],
      organizacion: ['', {
      }],
      observaciones: ['', {
      }],
    });
    if(this.dd.isSync('dependencia', this.sync)) fg.addControl('dependencia', new FormControl('', this.validators.typeaheadSelection('sede')));
    if(this.dd.isSync('tipo_sede', this.sync)) fg.addControl('tipo_sede', new FormControl(''));
    if(this.dd.isSync('domicilio', this.sync)) fg.addControl('domicilio', new FormControl('', this.validators.typeaheadSelection('domicilio')));
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get numero() { return this.fieldset.get('numero')}
  get nombre() { return this.fieldset.get('nombre')}
  get organizacion() { return this.fieldset.get('organizacion')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get baja() { return this.fieldset.get('baja')}
  get dependencia() { return this.fieldset.get('dependencia')}
  get tipoSede() { return this.fieldset.get('tipo_sede')}
  get domicilio() { return this.fieldset.get('domicilio')}

}
