import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { 
  NgbDateAdapter, 
  NgbTimeAdapter,
  NgbCollapseModule, 
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LabelPipe } from './core/pipe/label.pipe';
import { ToDatePipe } from './core/pipe/to-date.pipe';
import { SiNoPipe } from './core/pipe/si-no.pipe';

import { DataDefinitionService } from './core/service/data-definition/data-definition.service';
import { DataDefinitionLoaderService } from './service/data-definition-loader.service';
import { SessionStorageService } from './core/service/storage/session-storage.service';
import { ParserService } from './core/service/parser/parser.service';
import { NgbIsoDateAdapter } from './core/service/ng-bootstrap/ngb-iso-date-adapter';
import { NgbStringTimeAdapter } from './core/service/ng-bootstrap/ngb-string-time-adapter';

import { MenuComponent } from './component/menu/menu.component';
import { SedeShowComponent } from './component/sede-show/sede-show/sede-show.component';
import { SedeTableComponent } from './component/sede-show/sede-table/sede-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, SiNoPipe,
    SedeShowComponent, SedeTableComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
    NgbCollapseModule, NgbDropdownModule
  ],
  providers: [
    DataDefinitionService, DataDefinitionLoaderService, SessionStorageService, ParserService, 
    {provide: NgbDateAdapter, useClass: NgbIsoDateAdapter}, 
    {provide: NgbTimeAdapter, useClass: NgbStringTimeAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
