import { Component } from '@angular/core';
import { SearchComponent } from '@component/search/search.component';
import { FormBuilder } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sede-search',
  templateUrl: './sede-search.component.html',
})
export class SedeSearchComponent extends SearchComponent  {
  entity: string = "sede";

  constructor(protected fb: FormBuilder, protected dd: DataDefinitionService, protected router: Router)  {
    super(fb, dd, router);
  }
}

