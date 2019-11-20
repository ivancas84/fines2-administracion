import { Injectable } from '@angular/core';

import { SessionStorageService } from 'src/app/core/service/storage/session-storage.service';
import { ParserService } from 'src/app/core/service/parser/parser.service';
import { DataDefinition } from 'src/app/core/class/data-definition';

import { CentroEducativoDataDefinition } from 'src/app/class/data-definition/centro-educativo/centro-educativo-data-definition';
import { DomicilioDataDefinition } from 'src/app/class/data-definition/domicilio/domicilio-data-definition';
import { SedeDataDefinition } from 'src/app/class/data-definition/sede/sede-data-definition';
import { TipoSedeDataDefinition } from 'src/app/class/data-definition/tipo-sede/tipo-sede-data-definition';

@Injectable({
  providedIn: 'root'
})
export class DataDefinitionLoaderService {

  constructor(protected stg: SessionStorageService, protected parser: ParserService){ }

  get(name: string): DataDefinition {
    switch(name) {
      case "centro_educativo": { return new CentroEducativoDataDefinition(this.stg, this.parser); }
      case "domicilio": { return new DomicilioDataDefinition(this.stg, this.parser); }
      case "sede": { return new SedeDataDefinition(this.stg, this.parser); }
      case "tipo_sede": { return new TipoSedeDataDefinition(this.stg, this.parser); }
    }
  }
}
