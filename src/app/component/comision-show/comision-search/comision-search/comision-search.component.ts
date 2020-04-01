import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchComponent } from '@component/search/search.component';

@Component({
  selector: 'app-comision-search',
  templateUrl: './comision-search.component.html',
})
export class ComisionSearchComponent extends SearchComponent {
  readonly entityName = 'comision';

  public optCard: boolean = false;
  
  constructor(protected fb: FormBuilder) {
    super(fb);
  }

}
