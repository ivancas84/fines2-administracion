import { FormGroup, FormBuilder, AbstractControl, FormControl, FormArray, ValidationErrors } from '@angular/forms';
import { ReplaySubject, Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';
import { emptyUrl } from '@function/empty-url.function';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { ToastService } from '@service/ng-bootstrap/toast.service';

export class CrearComisionesComponent {

  form: FormGroup = this.fb.group({});
  /**
   * formulario
   */

  params$ = new ReplaySubject();
  /**
   * parametros
   */
  
  protected subscriptions = new Subscription();
  /**
   * las subscripciones son almacenadas para desuscribirse (solucion temporal al bug de Angular)
   * @todo En versiones posteriores de angular, eliminar el atributo subscriptions y su uso
   */
   

  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute, 
    protected router: Router, 
    protected location: Location, 
    protected dd: DataDefinitionService, 
    protected toast: ToastService, 
    protected validators: ValidatorsService,
    protected storage: SessionStorageService, 
  ) {}
  
  ngOnInit() {
    var s = this.adminForm.valueChanges.subscribe (
      formValues => { this.storage.setItem(this.router.url, formValues); },
      error => { this.toast.showDanger(JSON.stringify(error)); }
    );
    this.subscriptions.add(s); 

    var s = this.params$.subscribe (
      params => {        
        this.params = params;
        let formValues = this.storage.getItem(this.router.url);
        this.removeStorage();
        if(formValues) this.setDataFromStorage(formValues);
        else this.setDataFromParams(params);
      },
      error => { this.toast.showDanger(JSON.stringify(error)); }
    )
    this.subscriptions.add(s);
    
    var s = this.route.queryParams.subscribe (
      params => { this.params$.next(params); },
      error => { this.toast.showDanger(JSON.stringify(error)); }
    );
    this.subscriptions.add(s);
  }

  setDataFromStorage(formValues: any): void {
    var d = formValues.hasOwnProperty(this.entity)? formValues[this.entity] : null;
    this.data$.next(d);   
  }

  setDataFromParams(params: any): void {
    if(isEmptyObject(params)) {
      this.data$.next(null);
      return;
    } 

    this.dd.uniqueOrNull(this.entity, params).pipe(first()).subscribe(
      response => {
        if (response) this.data$.next(response);
        else this.data$.next(params);
      }
    ); 
  }

  removeStorage(){ //eliminar datos del storage 
    /**
     * Se elimina la ruta actual y las variantes de la ruta actual
     * Las variantes corresponden a aquellas url que tienen la misma ruta pero diferentes parametros
     */
    var route = this.router.url;
    var index = this.router.url.indexOf('?');
    if (index != -1) route = this.router.url.substring(0, index);
    this.storage.removeItemsPrefix(route);
  }


  back() { this.location.back(); }

  delete() { this.toast.showInfo ("No implementado"); }

  clear(): void { //limpia la url y declara los datos vacios
    /**
     * si la ruta es diferente, se reasignaran los parametros de la url y se repetira el proceso de inicializacion
     * si la ruta es la misma, se limpia el storage y se asignan parametros en null
     */
    let route = emptyUrl(this.router.url);
    if(this.router.url != route) this.router.navigateByUrl('/' + route);
    
    else {
      this.removeStorage();
      this.params$.next(null);
    }
  }

  reset(): void{
    this.removeStorage();
    this.params$.next(this.params);

    /*var s = this.params$.subscribe(
      params => { this.setDataFromParams(params); },
      error => { this.toast.showDanger(JSON.stringify(error)); }
    )
    this.subscriptions.add(s);*/
  }
  
  persist(): Observable<any> {
    /**
     * persistencia
     * Se define un metodo independiente para facilitar la redefinicion
     */
    return this.dd.persist(this.entity, this.serverData())
  }

  onSubmit(): void {
    /**
     * envio de formulario
     */
    this.isSubmitted = true;
    
    if (!this.adminForm.valid) {
      //this.logValidationErrors(this.adminForm);
      this.markAllAsTouched(this.adminForm); //Marcar todos los elementos como touched para visualizar errores
      this.logValidationErrors(this.adminForm);
      this.toast.showInfo("Verificar formulario");
      this.isSubmitted = false;

    } else {
      var s = this.persist().subscribe(
        logs => {
          if(logs && logs.length){
            this.storage.removeItemsContains(".");
            logs.forEach(
              element => this.storage.removeItem(element)
            );
          }
          this.removeStorage();
          this.params$.next({id:this.getProcessedId(logs)});
          this.toast.showSuccess("Registro realizado");
          this.isSubmitted = false;
        },
        error => { this.toast.showDanger(JSON.stringify(error)); }
      );
      this.subscriptions.add(s);
    }
  }

  getProcessedId(logs: Array<any>) {  
    for(var i in logs){
      if(logs[i].indexOf(this.entity) === 0) {
        var re = new RegExp(this.entity,"g");
        return logs[i].replace(re, "");
      }
    }
  }

  serverData(){
    var serverData: any[] = [];

    Object.keys(this.adminForm.controls).forEach(key => {
      const control = this.adminForm.get(key);

      if(control instanceof FormGroup && control.enabled) serverData.push({action:"persist", entity:key, row:this.adminForm.value[key]});
      if(control instanceof FormArray && control.enabled) serverData.push({action:"persist", entity:key, rows:this.adminForm.value[key]});      
    });

    return serverData;
  }

  /**
   * Obtener id de la respuesta
   * Los formularios complejos pueden obtener el id de diferentes formas
   */

  markAllAsTouched(control: AbstractControl) { 
  /**
   * Marcar todos los elementos del formulario como touched para visualizar errores
   */
    if(control.hasOwnProperty('controls')) {
        control.markAsTouched({ onlySelf: true }) // mark group
        let ctrl = <any>control;
        for (let inner in ctrl.controls) this.markAllAsTouched(ctrl.controls[inner] as AbstractControl);
    }
    else (<FormControl>(control)).markAsTouched({ onlySelf: true });
  }


  logValidationErrors(formGroup) {
    /**
     * log de errores del formulario
     * Utilizado opcionalmente para propositos de Debug
     */
    Object.keys(formGroup.controls).forEach(key => {

      const control = formGroup.get(key);

      if(control instanceof FormGroup ) {
        console.log("FormGroup " + key);

        const controls: ValidationErrors = formGroup.get(key).controls;
          Object.keys(controls).forEach(keyC => {
            if(controls[keyC].errors) {
              Object.keys(controls[keyC].errors).forEach(keyError => {
                console.log('* ERROR: ' + key + ' ('+keyC+'): ' + keyError + ':' + controls[keyC].errors[keyError]);
              })
            }            
          });
      }
      else if(control instanceof FormArray ) {
        console.log("FormArray " + key);

        for (let i = 0; i < control.controls.length; i++){
          console.log("+ index " + i);
          this.logValidationErrors(control.controls[i]);
        }
      }
      
      
    });
  }

  ngOnDestroy () { this.subscriptions.unsubscribe() } //eliminar subscripciones
}