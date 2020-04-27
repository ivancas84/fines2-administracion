import { FormGroup, FormBuilder, AbstractControl, FormControl, FormArray, ValidationErrors, Validators } from '@angular/forms';
import { ReplaySubject, Subscription, Observable, of, forkJoin } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { first, map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { emptyUrl } from '@function/empty-url.function';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { ToastService } from '@service/ng-bootstrap/toast.service';
import { OnInit, Component } from '@angular/core';
import { markAllAsTouched } from '@function/mark-all-as-touched';
import { logValidationErrors } from '@function/log-validation-errors';
import { Display } from '@class/display';
import { encodeUriObject } from '@function/encodeUriObject';

@Component({
  selector: 'crear-horarios-comision',
  templateUrl: './crear-horarios-comision.component.html',
})
export class CrearHorariosComisionComponent implements OnInit{

  form: FormGroup;
  /**
   * formulario
   */

  options: Observable<any>; 
  /**
   * opciones para el formulario
   */
  
  protected subscriptions = new Subscription();
  /**
   * las subscripciones son almacenadas para desuscribirse (solucion temporal al bug de Angular)
   * @todo En versiones posteriores de angular, eliminar el atributo subscriptions y su uso
   */
   
  optDia$: Observable<Array<any>>;

  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute, 
    protected location: Location, 
    protected dd: DataDefinitionService, 
    protected toast: ToastService, 
    protected validators: ValidatorsService,
    protected storage: SessionStorageService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.initData();
    this.initOptions();
  }

  initData() {
    this.id.setValue(
      this.route.snapshot.paramMap.get("id")
    );
  }
  
  initForm() {    
    this.form = this.fb.group({
      id: [null, {
        validators: [Validators.required],
      }],
      dias: [null, {
        validators: [Validators.required],
      }],
      hora_inicio: [null, {
        validators: [Validators.required],
      }],
    });
  }

  initOptions(): void {
    this.optDia$ = this.dd.all('dia', new Display);
  }

  get id() { return this.form.get('id')}
  get dias() { return this.form.get('dias')}
  get horaInicio() { return this.form.get('hora_inicio')}

  back() { this.location.back(); }

  onSubmit(): void {
    /**
     * envio de formulario
     */
    if (!this.form.valid) {
      markAllAsTouched(this.form);
      logValidationErrors(this.form);
      this.toast.showInfo("Verificar formulario");

    } else {
      /**
       * se ejecuta a traves de un script ya que la persistencia genera gran cantidad de logs.
       * No serán almacenadas como transacciones
       */
      window.open("http://localhost/fines2-estructura/script/crear_horarios.php?"+ encodeUriObject(this.form.value), "_blank");
      this.storage.removeItemsContains(".");
      this.toast.showInfo("Se ha ejecutado un script externo");
    }
  }
  
  ngOnDestroy () { this.subscriptions.unsubscribe() }
}