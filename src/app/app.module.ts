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
} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LabelPipe } from './core/pipe/label.pipe';
import { ToDatePipe } from './core/pipe/to-date.pipe';
import { SiNoPipe } from './core/pipe/si-no.pipe';

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
import { CoordinadorTableComponent } from '@component/sede-admin/coordinador-table/coordinador-table.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, SiNoPipe,
    PaginationComponent,
    MessagesComponent,
    CentroEducativoAdminComponent, CentroEducativoFieldsetComponent, DomicilioCeFieldsetComponent,
    CentroEducativoShowComponent, CentroEducativoTableComponent,
    PersonaAdminComponent, PersonaFieldsetComponent,
    PersonaShowComponent, PersonaTableComponent,
    SedeShowComponent, SedeTableComponent, SedeSearchComponent,
    SedeAdminComponent, SedeFieldsetComponent, DomicilioSFieldsetComponent, CoordinadorTableComponent,
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
    ToastService,
    {provide: NgbDateAdapter, useClass: NgbIsoDateAdapter}, 
    {provide: NgbTimeAdapter, useClass: NgbStringTimeAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
