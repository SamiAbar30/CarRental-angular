import { calender } from './../../../calender';

import { Clients } from './../../../Clients';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tableclient',
  templateUrl: './tableclient.component.html',
  styleUrls: ['./tableclient.component.scss'],
})
export class TableclientComponent implements OnInit {
  productDialog: boolean;
  productDialogcompt: boolean;
  Numpi: any;
  Cliants: Clients[];
  Compte: any[];
  Cliant: Clients;
  exp: boolean = false;
events:calender[]=[];
title = 'Tableclient';
fileName= 'TableclientExcelSheet.xlsx';
  constructor(private serice: SharedService) {}

  ngOnInit() {

    this.load();

  }
load(){
  this.serice.getClients().subscribe((dep) => {
    this.Cliants = dep;
  });
}
  openNew() {
    this.productDialog = true;
    this.exp = true;
    this.Cliant = {};
    this.Numpi = 0;
  }

  edit(val: any) {
    this.productDialog = true;
    this.exp = true;
    this.Cliant = val;
    this.Numpi = 1;
  }
  delet(val: any) {
    this.serice.deleteClients(val).subscribe((res) => alert(res));
    this.events=[
      { title: localStorage.getItem('login')+' deletecliant', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
    this.load();

  }
  comptecliant(val:any){
    this.serice.CompteCliant(val).subscribe((dep) => {
      this.Compte = dep;
      this.productDialog = true;
      this.exp = false;
    });
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
  filterGlobal(val: any) {}

  hideDialog() {
    this.productDialog = false;
  }
}
