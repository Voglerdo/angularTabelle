import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';


export interface DashboardData {

  name: string;
  vorname: string;
  groesse:number;
  product: string;
  preis:number;
  fleischart:string;
  sonderwunsch:string;
  spezialAnweisung:string;
  sosse1: string;
  sosse2: string;
  datum: Date;
}

const Dashboard_DATA: DashboardData[] = [
  {
    name: "Mustermann",
    vorname: "Max",
    groesse: 180,
    product: "Pizza",
    preis: 12.99,
    fleischart: "Huhn",
    sonderwunsch: "Ohne Zwiebeln",
    spezialAnweisung: "Knusprig gebacken",
    sosse1: "Tomatensoße",
    sosse2: "Knoblauchsoße",
    datum: new Date("2024-02-26"),
  },

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
  displayedColumns: string[] = ['name', 'vorname' ];
  dataSource = Dashboard_DATA;
}
