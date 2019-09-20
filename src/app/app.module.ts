import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbDateAdapter, NgbTimeAdapter } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataDefinitionService } from './core/service/data-definition/data-definition.service';
import { DataDefinitionLoaderService } from './service/data-definition-loader.service';
import { SessionStorageService } from './core/service/storage/session-storage.service';
import { ParserService } from './core/service/parser/parser.service';
import { NgbIsoDateAdapter } from './core/service/ng-bootstrap/ngb-iso-date-adapter';
import { NgbStringTimeAdapter } from './core/service/ng-bootstrap/ngb-string-time-adapter';
import { TestComponent } from './component/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
  ],
  providers: [
    DataDefinitionService, DataDefinitionLoaderService, SessionStorageService, ParserService, 
    {provide: NgbDateAdapter, useClass: NgbIsoDateAdapter}, 
    {provide: NgbTimeAdapter, useClass: NgbStringTimeAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
