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
import { SedeDomicilioAdminComponent } from '@component/sede-admin/sede-domicilio-admin/sede-domicilio-admin.component';
import { DomicilioFieldsetComponent } from '@component/sede-admin/domicilio-fieldset/domicilio-fieldset.component';
import { CoordinadorTableComponent } from '@component/sede-admin/coordinador-table/coordinador-table.component';
import { SedeFieldsetComponent } from '@component/sede-admin/sede-fieldset/sede-fieldset.component';
import { TipoSedeAdminComponent } from '@component/tipo-sede-admin/tipo-sede-admin/tipo-sede-admin.component';
import { TipoSedeFieldsetComponent } from '@component/tipo-sede-admin/tipo-sede-fieldset/tipo-sede-fieldset.component';
import { TipoSedeShowComponent } from '@component/tipo-sede-show/tipo-sede-show/tipo-sede-show.component';
import { TipoSedeTableComponent } from '@component/tipo-sede-show/tipo-sede-table/tipo-sede-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, SiNoPipe,
    PaginationComponent,
    SedeShowComponent, SedeTableComponent, SedeSearchComponent,
    SedeAdminComponent, SedeDomicilioAdminComponent, SedeFieldsetComponent, DomicilioFieldsetComponent, CoordinadorTableComponent,
    TipoSedeAdminComponent, TipoSedeFieldsetComponent,
    TipoSedeShowComponent, TipoSedeTableComponent,
    TestComponent,
    FilterTypeaheadComponent, FieldsetTypeaheadComponent,
    ModalConfirmComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    ReactiveFormsModule,
    NgbCollapseModule, NgbDropdownModule, NgbPaginationModule, NgbAccordionModule, NgbTypeaheadModule
  ],
  providers: [
    DataDefinitionService, DataDefinitionLoaderService, SessionStorageService, ParserService, 
    {provide: NgbDateAdapter, useClass: NgbIsoDateAdapter}, 
    {provide: NgbTimeAdapter, useClass: NgbStringTimeAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
