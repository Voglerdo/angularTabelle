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
    product: "Doener",
    preis: 12.99,
    fleischart: "Huhn",
    sonderwunsch: "Ohne Zwiebeln",
    spezialAnweisung: "Knusprig gebacken",
    sosse1: "Tomatensoße",
    sosse2: "Knoblauchsoße",
    datum: new Date(Date.now()),
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
  displayedColumns: string[] = ['name', 'vorname', 'groesse', 'product', 'preis', 'fleischart', 'sonderwunsch', 'spezialAnweisung', 'sosse1', 'sosse2', 'datum'];
  dataSource = Dashboard_DATA;
  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  }
}
