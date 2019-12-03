import { Component, OnInit } from '@angular/core';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
 
  constructor( protected dd: DataDefinitionService) { }

  ngOnInit(): void {   
    this.dd.getAll("sede", [251]).subscribe(
      rows => console.log(rows)
    );
  }


}
