import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { 
  NgbModule,
  NgbDateAdapter, 
  // NgbCollapseModule, 
  // NgbDropdownModule,
  // NgbPaginationModule,
  // NgbAccordionModule,
  // NgbTypeaheadModule,
  // NgbToastModule,
  // NgbDatepickerModule,
  NgbDateParserFormatter,
  // NgbTimepickerModule,
  NgbTimeAdapter,
} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LabelPipe } from '@pipe/label.pipe';
import { ToDatePipe } from '@pipe/to-date.pipe';
import { ToTimePipe } from '@pipe/to-time.pipe';
import { SiNoPipe } from '@pipe/si-no.pipe';
import { StoragePipe } from '@pipe/storage.pipe';
import { SummaryPipe } from '@pipe/summary.pipe';
import { SearchAllComponent } from '@component/search-all/search-all.component';
import { PaginationComponent } from '@component/pagination/pagination.component';
import { MessagesComponent } from '@component/messages/messages.component';
import { ModalConfirmComponent } from '@component/modal-confirm/modal-confirm.component';
import { ToastsComponent } from '@component/toasts/toasts.component';
import { MessageService } from '@service/message/message.service';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { TypeaheadComponent } from '@component/typeahead/typeahead.component';
import { ToastService } from '@service/ng-bootstrap/toast.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { NgbIsoDateAdapter } from '@service/ng-bootstrap/ngb-iso-date-adapter';
import { NgbDateCustomParserFormatter } from '@service/ng-bootstrap/dateformat';
import { ParserService } from '@service/parser/parser.service';
import { UploadComponent } from '@component/upload/upload.component';
import { DownloadComponent } from '@component/download/download.component';
import { NgbStringTimeAdapter } from '@service/ng-bootstrap/ngb-string-time-adapter';
import { ModalAlertComponent } from '@component/modal-alert/modal-alert.component';

import { DataDefinitionLoaderService } from '@service/data-definition-loader.service';
import { MenuComponent } from '@component/menu/menu.component';

import { CursoHorarioLabelComponent } from '@component/label/curso-horario-label/curso-horario-label.component';

import { ComisionAdminComponent } from '@component/comision-admin/comision-admin/comision-admin.component';
import { ComisionFieldsetComponent } from '@component/comision-admin/comision-fieldset/comision-fieldset/comision-fieldset.component';
import { PlanificacionFormPickComponent } from '@component/comision-admin/comision-fieldset/planificacion-form-pick/planificacion-form-pick.component';

import { ComisionDetailComponent } from '@component/comision-detail/comision-detail/comision-detail.component';
import { ComisionCardComponent } from '@component/comision-detail/comision-card/comision-card.component';
import { ComisionHorarioGridComponent } from '@component/comision-detail/comision-horario-grid/comision-horario-grid.component';
import { ComisionCursoGridComponent } from '@component/comision-detail/comision-curso-grid/comision-curso-grid.component';
import { CrearHorariosComisionComponent } from '@component/comision-detail/crear-horarios-comision/crear-horarios-comision.component';

import { ConsolidadoComponent } from '@component/consolidado/consolidado/consolidado.component';
import { ConsolidadoTableComponent } from '@component/consolidado/consolidado-table/consolidado-table.component';
import { ConsolidadoSearchComponent } from '@component/consolidado/consolidado-search/consolidado-search/consolidado-search.component';
import { ConsolidadoSearchParamsComponent } from '@component/consolidado/consolidado-search/consolidado-search-params/consolidado-search-params.component';
import { ConsolidadoSearchOrderComponent } from '@component/consolidado/consolidado-search/consolidado-search-order/consolidado-search-order.component';

import { ConsolidadoAdminComponent } from '@component/consolidado-admin/consolidado-admin/consolidado-admin.component';
import { ConsolidadoAdminTableComponent } from '@component/consolidado-admin/consolidado-admin-table/consolidado-admin-table.component';

import { SedeAdminComponent } from '@component/sede-admin/sede-admin/sede-admin.component';
import { SedeFieldsetComponent } from '@component/sede-admin/sede-fieldset/sede-fieldset.component';
import { DomicilioSedeFieldsetComponent } from '@component/sede-admin/domicilio-sede-fieldset/domicilio-sede-fieldset.component';
import { DesignacionTableComponent } from '@component/sede-admin/designacion-table/designacion-table.component';

import { SedeShowComponent } from '@component/sede-show/sede-show/sede-show.component';
import { SedeTableComponent } from '@component/sede-show/sede-table/sede-table.component';
import { SedeSearchComponent } from '@component/sede-show/sede-search/sede-search/sede-search.component';
import { SedeSearchParamsComponent } from '@component/sede-show/sede-search/sede-search-params/sede-search-params.component';

import { CalendarioAdminComponent } from '@component/calendario-admin/calendario-admin/calendario-admin.component';
import { CalendarioFieldsetComponent } from '@component/calendario-admin/calendario-fieldset/calendario-fieldset.component';

import { DetallePersonaAdminComponent } from '@component/detalle-persona-admin/detalle-persona-admin/detalle-persona-admin.component';
import { DetallePersonaFieldsetComponent } from '@component/detalle-persona-admin/detalle-persona-fieldset/detalle-persona-fieldset.component';

import { EmailAdminComponent } from '@component/email-admin/email-admin/email-admin.component';
import { EmailFieldsetComponent } from '@component/email-admin/email-fieldset/email-fieldset.component';

import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { PersonaFieldsetComponent } from '@component/persona-admin/persona-fieldset/persona-fieldset.component';
import { PersonaDomicilioFieldsetComponent } from '@component/persona-admin/persona-domicilio-fieldset/persona-domicilio-fieldset.component';
import { EmailGridComponent } from '@component/persona-admin/email-grid/email-grid.component';
import { DetallePersonaGridComponent } from '@component/persona-admin/detalle-persona-grid/detalle-persona-grid.component';

import { PersonaShowComponent } from '@component/persona-show/persona-show/persona-show.component';
import { PersonaGridComponent } from '@component/persona-show/persona-grid/persona-grid.component';
import { PersonaSearchComponent } from '@component/persona-show/persona-search/persona-search.component';

import { TelefonoAdminComponent } from '@component/telefono-admin/telefono-admin/telefono-admin.component';
import { TelefonoFieldsetComponent } from '@component/telefono-admin/telefono-fieldset/telefono-fieldset.component';

import { TomaAdminComponent } from '@component/toma-admin/toma-admin/toma-admin.component';
import { TomaFieldsetComponent } from '@component/toma-admin/toma-fieldset/toma-fieldset.component';
import { TaCursoCardComponent } from '@component/toma-admin/ta-curso-card/ta-curso-card.component';
import { TelefonoGridComponent } from '@component/persona-admin/telefono-grid/telefono-grid.component';
import { LabelComponent } from '@component/label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, ToTimePipe, SiNoPipe, SummaryPipe, StoragePipe,
    SearchAllComponent,
    PaginationComponent,
    MessagesComponent,
    TypeaheadComponent,
    ModalAlertComponent,
    ModalConfirmComponent,
    ToastsComponent,
    UploadComponent,
    DownloadComponent,
    LabelComponent,

    CursoHorarioLabelComponent,

    CalendarioAdminComponent, CalendarioFieldsetComponent,
    ComisionAdminComponent, ComisionFieldsetComponent, PlanificacionFormPickComponent,
    ComisionDetailComponent, ComisionCardComponent, ComisionHorarioGridComponent, ComisionCursoGridComponent, CrearHorariosComisionComponent,
    ConsolidadoComponent, ConsolidadoTableComponent, ConsolidadoSearchComponent, ConsolidadoSearchParamsComponent, ConsolidadoSearchOrderComponent,
    ConsolidadoAdminComponent, ConsolidadoAdminTableComponent,
    DetallePersonaAdminComponent, DetallePersonaFieldsetComponent,
    EmailAdminComponent, EmailFieldsetComponent,
    PersonaAdminComponent, PersonaFieldsetComponent, PersonaDomicilioFieldsetComponent, EmailGridComponent, DetallePersonaGridComponent, TelefonoGridComponent,
    PersonaShowComponent, PersonaGridComponent, PersonaSearchComponent, 
    SedeAdminComponent, SedeFieldsetComponent, DomicilioSedeFieldsetComponent, DesignacionTableComponent,
    SedeShowComponent, SedeTableComponent, SedeSearchComponent, SedeSearchParamsComponent,
    TelefonoAdminComponent, TelefonoFieldsetComponent,
    TomaAdminComponent, TomaFieldsetComponent, TaCursoCardComponent,

  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    ReactiveFormsModule,
    NgbModule
    //NgbToastModule, NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbAccordionModule, NgbTypeaheadModule, NgbDatepickerModule, NgbTimepickerModule
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
