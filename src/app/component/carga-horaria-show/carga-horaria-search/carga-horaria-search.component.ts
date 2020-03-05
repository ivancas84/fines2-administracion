import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchComponent } from '@component/search/search.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-carga-horaria-search',
  templateUrl: './carga-horaria-search.component.html',
})
export class CargaHorariaSearchComponent extends SearchComponent {
  entity = 'carga_horaria';

  constructor(protected fb: FormBuilder)  {
    super(fb);
  }

}
