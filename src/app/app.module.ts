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
  NgbDatepickerModule,
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

import { DataDefinitionLoaderService } from '@service/data-definition-loader.service';
import { MenuComponent } from '@component/menu/menu.component';

import { ComisionAdminComponent } from '@component/comision-admin/comision-admin/comision-admin.component';
import { ComisionFieldsetComponent } from 'tmp/component/fieldset/comision-fieldset/comision-fieldset.component';
import { PlanificacionFormPickComponent } from '@component/comision-admin/comision-fieldset/planificacion-form-pick/planificacion-form-pick.component';

import { ConsolidadoAdminComponent } from '@component/consolidado-admin/consolidado-admin/consolidado-admin.component';
import { ConsolidadoAdminTableComponent } from '@component/consolidado-admin/consolidado-admin-table/consolidado-admin-table.component';
import { ConsolidadoAdminSearchComponent } from '@component/consolidado-admin/consolidado-admin-search/consolidado-admin-search/consolidado-admin-search.component';
import { ConsolidadoAdminSearchParamsComponent } from '@component/consolidado-admin/consolidado-admin-search/consolidado-admin-search-params/consolidado-admin-search-params.component';

import { SedeAdminComponent } from '@component/sede-admin/sede-admin/sede-admin.component';
import { SedeFieldsetComponent } from '@component/sede-admin/sede-fieldset/sede-fieldset.component';
import { DomicilioSedeFieldsetComponent } from '@component/sede-admin/domicilio-sede-fieldset/domicilio-sede-fieldset.component';
import { DesignacionTableComponent } from '@component/sede-admin/designacion-table/designacion-table.component';

import { SedeShowComponent } from '@component/sede-show/sede-show/sede-show.component';
import { SedeTableComponent } from '@component/sede-show/sede-table/sede-table.component';
import { SedeSearchComponent } from '@component/sede-show/sede-search/sede-search/sede-search.component';
import { SedeSearchParamsComponent } from '@component/sede-show/sede-search/sede-search-params/sede-search-params.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, ToTimePipe, SiNoPipe, SummaryPipe, StoragePipe,
    SearchAllComponent,
    PaginationComponent,
    MessagesComponent,
    TypeaheadComponent,
    ModalConfirmComponent,
    ToastsComponent,
    UploadComponent,
    DownloadComponent,

    ComisionAdminComponent, ComisionFieldsetComponent, PlanificacionFormPickComponent,
    ConsolidadoAdminComponent, ConsolidadoAdminTableComponent, ConsolidadoAdminSearchComponent, ConsolidadoAdminSearchParamsComponent,
    SedeAdminComponent, SedeFieldsetComponent, DomicilioSedeFieldsetComponent, DesignacionTableComponent,
    SedeShowComponent, SedeTableComponent, SedeSearchComponent, SedeSearchParamsComponent,
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
