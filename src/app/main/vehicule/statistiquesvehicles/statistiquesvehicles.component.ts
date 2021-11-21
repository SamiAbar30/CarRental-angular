import { SharedService } from 'src/app/shared.service';
import { Component,OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import * as XLSX from 'xlsx';
interface Statistiques {
  Immatricule?: String;
  1?: String;
  2?: String;
  3?: String;
  4?: String;
  5?: String;
  6?: String;
  7?: String;
  8?: String;
  9?: String;
  10?: String;
  11?: String;
  12?: String;
  total?: String;

}
@Component({
  selector: 'app-statistiquesvehicles',
  templateUrl: './statistiquesvehicles.component.html',
  styleUrls: ['./statistiquesvehicles.component.scss'],
})
export class StatistiquesvehiclesComponent implements OnInit{
  data: any;
  chartOptions: any;
  subscription: Subscription;
  config: any;

  Statistiques: Statistiques[];
  total: any[];
  date: Date = new Date();
  items: any[]=[];
  Imm: any[]=[];
  item: any = { label: new Date().getFullYear() };
  title = 'Tablevehicule';
  fileName= 'TablevehiculeExcelSheet.xlsx';
  constructor(private serice: SharedService) {}

  ngOnInit() {
    this.items = [];
    for (let i = 2000; i < new Date().getFullYear() + 1; i++) {
      this.items.push({ label: i });
    }



    this.load();

  }

   load() {

   this.serice
      .getStatistiquesVehicles(this.item.label)
      .subscribe( (dep) => {
          this.Statistiques =  dep;
          this.roandchart();
      });


  }
  roandchart(){
    this.total = [];
    this.Imm = [];
    for (let i = 0; i < this.Statistiques?.length; i++) {
      this.total.push(this.Statistiques[i].total);
    }
    for (let i = 0; i < this.Statistiques?.length; i++) {
      this.Imm.push(this.Statistiques[i].Immatricule);
    }
    this.data={};
    this.data = {
      labels: this.Imm,
      datasets: [
        {
          data: this.total,
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#FAA706'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFA726', '#FAA706'],
        },
      ],
    };
  }
  PrintXLS(){
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
 }

}
