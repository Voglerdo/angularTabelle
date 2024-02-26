import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import internal from 'stream';

export interface DashboardData {

  name: string;
  vorname: string;
  groeße:number;
  product: string;
  preis:number;
  fleischart:string;
  sonderwunsch:string;
  spezialAnweisung:string;
  soße1: string;
  soße2: string;
  datum: Date;
}

const ELEMENT_DATA: DashboardData[] = [
  {name: 'Rauch', vorname: 'raphae' },

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
