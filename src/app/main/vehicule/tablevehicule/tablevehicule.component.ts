import { calender } from './../../../calender';
import { SharedService } from './../../../shared.service';
import { Vehicules } from './../../../Vehicules';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tablevehicule',
  templateUrl: './tablevehicule.component.html',
  styleUrls: ['./tablevehicule.component.scss'],
})
export class TablevehiculeComponent implements OnInit {
  Dialog: boolean = false;
  Vehicules: Vehicules[];
  Vehicule: Vehicules;
  Numpi: any;
  exp: boolean = false;
  title = 'Tablevehicule';
  fileName= 'TablevehiculeExcelSheet.xlsx';
  events:calender[]=[];
  constructor(private serice: SharedService) {}

  ngOnInit() {
    this.load();
  }
  load() {
    this.serice.getVehicules().subscribe((dep) => {
      this.Vehicules = dep;
    });
  }

  funcpapier(id: any) {
    this.Dialog = true;
    this.Numpi = id;
    this.exp = false;
  }
  openNew() {
    this.Dialog = true;
    this.exp = true;
    this.Vehicule = {};
    this.Numpi = 0;
  }

  edit(val: any) {
    this.Dialog = true;
    this.exp = true;
    this.Vehicule = val;
    this.Numpi = 1;
  }
  delet(val: any) {
    this.serice.deleteVehicules(val).subscribe((res) => alert(res));
    this.events=[
      { title: localStorage.getItem('login')+' deleteVehicules', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
    this.load();
  }

  filterGlobal(val: any) {}

  hideDialog() {
    this.Dialog = false;
    this.exp != null;
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
