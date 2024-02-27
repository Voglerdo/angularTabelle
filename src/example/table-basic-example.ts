import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
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
  imports: [MatTableModule,MatButtonModule, MatDividerModule, MatIconModule,MatPaginatorModule],
})
export class TableBasicExample {



  displayedColumns: string[] = ['name', 'vorname', 'groesse', 'product', 'preis', 'fleischart', 'sonderwunsch', 'spezialAnweisung', 'sosse1', 'sosse2', 'datum'];
  dataSource = Dashboard_DATA;
  
  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  }


  editRow() {
    // Implement logic to edit the selected row (e.g., open an edit form)
    console.log("Edit button clicked");
  }
  
  refreshData() {
    // Implement logic to refresh the data from the server
    // This might involve fetching data again and updating the dataSource
    console.log("Refresh button clicked");
  }
  
  openFilterDialog() {
    // Open the filter dialog (implementation already provided in previous response)
  }
  
  deleteRow() {
    // Implement logic to delete the selected row (e.g., confirmation dialog and deletion logic)
    console.log("Delete button clicked");
  }
}
