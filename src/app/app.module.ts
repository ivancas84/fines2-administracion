import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { 
  NgbDateAdapter, 
  NgbTimeAdapter,
  NgbCollapseModule, 
  NgbDropdownModule,
  NgbPaginationModule,
  NgbAccordionModule,
  NgbTypeaheadModule,
  NgbToastModule,
  NgbDatepickerModule,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LabelPipe } from '@pipe/label.pipe';
import { ToDatePipe } from '@pipe/to-date.pipe';
import { SiNoPipe } from '@pipe/si-no.pipe';
import { SummaryPipe } from '@pipe/summary.pipe';


import { PaginationComponent } from '@component/pagination/pagination.component';
import { FilterTypeaheadComponent } from '@component/filter-typeahead/filter-typeahead.component';
import { SedeShowComponent } from '@component/sede-show/sede-show/sede-show.component';
import { SedeTableComponent } from '@component/sede-show/sede-table/sede-table.component';
import { SedeSearchComponent } from '@component/sede-show/sede-search/sede-search.component';
import { MenuComponent } from '@component/menu/menu.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { DataDefinitionLoaderService } from '@service/data-definition-loader.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { NgbIsoDateAdapter } from '@service/ng-bootstrap/ngb-iso-date-adapter';
import { NgbStringTimeAdapter } from '@service/ng-bootstrap/ngb-string-time-adapter';
import { ParserService } from '@service/parser/parser.service';
import { TestComponent } from '@component/test/test.component';
import { ModalConfirmComponent } from '@component/modal-confirm/modal-confirm.component';
import { SedeAdminComponent } from '@component/sede-admin/sede-admin/sede-admin.component';
import { FieldsetTypeaheadComponent } from '@component/fieldset-typeahead/fieldset-typeahead.component';
import { AsignaturaAdminComponent } from '@component/asignatura-admin/asignatura-admin/asignatura-admin.component';
import { AsignaturaFieldsetComponent } from '@component/asignatura-admin/asignatura-fieldset/asignatura-fieldset.component';
import { SedeFieldsetComponent } from '@component/sede-admin/sede-fieldset/sede-fieldset.component';
import { TipoSedeAdminComponent } from '@component/tipo-sede-admin/tipo-sede-admin/tipo-sede-admin.component';
import { TipoSedeFieldsetComponent } from '@component/tipo-sede-admin/tipo-sede-fieldset/tipo-sede-fieldset.component';
import { TipoSedeShowComponent } from '@component/tipo-sede-show/tipo-sede-show/tipo-sede-show.component';
import { TipoSedeTableComponent } from '@component/tipo-sede-show/tipo-sede-table/tipo-sede-table.component';
import { CentroEducativoAdminComponent } from '@component/centro-educativo-admin/centro-educativo-admin/centro-educativo-admin.component';
import { CentroEducativoFieldsetComponent } from '@component/centro-educativo-admin/centro-educativo-fieldset/centro-educativo-fieldset.component';
import { DomicilioCeFieldsetComponent } from '@component/centro-educativo-admin/domicilio-ce-fieldset/domicilio-ce-fieldset.component';
import { CentroEducativoShowComponent } from '@component/centro-educativo-show/centro-educativo-show/centro-educativo-show.component';
import { CentroEducativoTableComponent } from '@component/centro-educativo-show/centro-educativo-table/centro-educativo-table.component';
import { DomicilioSFieldsetComponent } from '@component/sede-admin/domicilio-fieldset/domicilio-s-fieldset.component';
import { MessageService } from '@service/message/message.service';
import { MessagesComponent } from '@component/messages/messages.component';
import { ToastService } from '@service/ng-bootstrap/toast.service';
import { ToastsComponent } from '@component/toasts/toasts.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { PersonaFieldsetComponent } from '@component/persona-admin/persona-fieldset/persona-fieldset.component';
import { PersonaShowComponent } from '@component/persona-show/persona-show/persona-show.component';
import { PersonaTableComponent } from '@component/persona-show/persona-table/persona-table.component';
import { NgbDateCustomParserFormatter } from '@service/ng-bootstrap/dateformat';
import { CargoAdminComponent } from '@component/cargo-admin/cargo-admin/cargo-admin.component';
import { CargoFieldsetComponent } from '@component/cargo-admin/cargo-fieldset/cargo-fieldset.component';
import { DesignacionAdminComponent } from '@component/designacion-admin/designacion-admin/designacion-admin.component';
import { DesignacionFieldsetComponent } from '@component/designacion-admin/designacion-fieldset/designacion-fieldset.component';
import { DesignacionTableComponent } from '@component/sede-admin/designacion-table/designacion-table.component';
import { PlanAdminComponent } from '@component/plan-admin/plan-admin/plan-admin.component';
import { PlanFieldsetComponent } from '@component/plan-admin/plan-fieldset/plan-fieldset.component';
import { PlanShowComponent } from '@component/plan-show/plan-show/plan-show.component';
import { PlanTableComponent } from '@component/plan-show/plan-table/plan-table.component';
import { ComisionAdminComponent } from '@component/comision-admin/comision-admin/comision-admin.component';
import { ComisionFieldsetComponent } from '@component/comision-admin/comision-fieldset/comision-fieldset.component';
import { ComisionShowComponent } from '@component/comision-show/comision-show/comision-show.component';
import { ComisionTableComponent } from '@component/comision-show/comision-table/comision-table.component';
import { CargaHorariaAdminComponent } from '@component/carga-horaria-admin/carga-horaria-admin/carga-horaria-admin.component';
import { CargaHorariaFieldsetComponent } from '@component/carga-horaria-admin/carga-horaria-fieldset/carga-horaria-fieldset.component';
import { PersonaSearchComponent } from '@component/persona-show/persona-search/persona-search.component';
import { AsignaturaShowComponent } from '@component/asignatura-show/asignatura-show/asignatura-show.component';
import { AsignaturaTableComponent } from '@component/asignatura-show/asignatura-table/asignatura-table.component';
import { CargaHorariaShowComponent } from '@component/carga-horaria-show/carga-horaria-show/carga-horaria-show.component';
import { CargaHorariaTableComponent } from '@component/carga-horaria-show/carga-horaria-table/carga-horaria-table.component';
import { CargaHorariaSearchComponent } from '@component/carga-horaria-show/carga-horaria-search/carga-horaria-search.component';
import { CursoAdminComponent } from '@component/curso-admin/curso-admin/curso-admin.component';
import { CursoFieldsetComponent } from '@component/curso-admin/curso-fieldset/curso-fieldset.component';
import { ValidatorsService } from '@service/validators/validators.service';
import { ComisionCardComponent } from '@component/comision-detail/comision-card/comision-card.component';
import { ComisionDetailComponent } from '@component/comision-detail/comision-detail/comision-detail.component';
import { ModalidadAdminComponent } from '@component/modalidad-admin/modalidad-admin/modalidad-admin.component';
import { ModalidadFieldsetComponent } from '@component/modalidad-admin/modalidad-fieldset/modalidad-fieldset.component';
import { ComisionCursoAdminComponent } from '@component/comision-admin/comision-curso-admin/comision-curso-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, SiNoPipe, SummaryPipe,
    PaginationComponent,
    MessagesComponent,
    AsignaturaAdminComponent, AsignaturaFieldsetComponent,
    AsignaturaShowComponent, AsignaturaTableComponent,
    CargaHorariaShowComponent, CargaHorariaTableComponent, CargaHorariaSearchComponent,
    CargaHorariaAdminComponent, CargaHorariaFieldsetComponent,
    CargoAdminComponent, CargoFieldsetComponent,
    CentroEducativoAdminComponent, CentroEducativoFieldsetComponent, DomicilioCeFieldsetComponent,
    CentroEducativoShowComponent, CentroEducativoTableComponent,
    ComisionAdminComponent, ComisionFieldsetComponent, ComisionCursoAdminComponent,
    ComisionShowComponent, ComisionTableComponent,
    ComisionDetailComponent, ComisionCardComponent,
    CursoAdminComponent, CursoFieldsetComponent,
    DesignacionAdminComponent, DesignacionFieldsetComponent,
    ModalidadAdminComponent, ModalidadFieldsetComponent,
    PlanAdminComponent, PlanFieldsetComponent,
    PlanShowComponent, PlanTableComponent,
    PersonaAdminComponent, PersonaFieldsetComponent,
    PersonaShowComponent, PersonaTableComponent, PersonaSearchComponent,
    SedeShowComponent, SedeTableComponent, SedeSearchComponent,
    SedeAdminComponent, SedeFieldsetComponent, DomicilioSFieldsetComponent, DesignacionTableComponent,
    TipoSedeAdminComponent, TipoSedeFieldsetComponent,
    TipoSedeShowComponent, TipoSedeTableComponent,
    TestComponent,
    FilterTypeaheadComponent, FieldsetTypeaheadComponent,
    ModalConfirmComponent,
    ToastsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    ReactiveFormsModule,
    NgbToastModule, NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbAccordionModule, NgbTypeaheadModule, NgbDatepickerModule
  ],
  providers: [
    MessageService, DataDefinitionService, DataDefinitionLoaderService, SessionStorageService, ParserService, 
    ToastService, ValidatorsService,
    {provide: NgbDateAdapter, useClass: NgbIsoDateAdapter}, 
    {provide: NgbTimeAdapter, useClass: NgbStringTimeAdapter},
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
