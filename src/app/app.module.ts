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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LabelPipe, ToDatePipe, ToTimePipe, SiNoPipe, SummaryPipe, StoragePipe,
    SearchAllComponent,
    PaginationComponent,
    MessagesComponent,
    ModalConfirmComponent,
    ToastsComponent,
    UploadComponent,
    DownloadComponent,
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
