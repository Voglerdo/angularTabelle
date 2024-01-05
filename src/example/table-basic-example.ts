import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {

  name: string;
  ID: number;
  age: number;
  gender: string;
  country: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, name: 'RR', age: 69, gender: 'Sigma',country: 'Österreich' },

];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
  standalone: true,
  imports: [MatTableModule],
})
export class TableBasicExample {
  displayedColumns: string[] = ['ID', 'name', 'country','gender','age'];
  dataSource = ELEMENT_DATA;
}
