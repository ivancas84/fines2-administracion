import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchComponent } from '@component/search/search.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { isEmptyObject } from '@function/is-empty-object.function';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-persona-search',
  templateUrl: './persona-search.component.html',
})
export class PersonaSearchComponent extends SearchComponent {
  entity = 'persona';

  constructor(protected fb: FormBuilder, protected dd: DataDefinitionService, protected router: Router)  {
    super(fb, dd, router);
  }

}
