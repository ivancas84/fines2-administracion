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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, SiNoPipe,
    PaginationComponent,
    SedeShowComponent, SedeTableComponent, SedeSearchComponent,
    FilterTypeaheadComponent
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
