import { Contrats } from './../../../Contrats';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';
import { calender } from 'src/app/calender';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-tablecontrat',
  templateUrl: './tablecontrat.component.html',
  styleUrls: ['./tablecontrat.component.scss']
})
export class TablecontratComponent implements OnInit {
  Dialog: boolean;
  exp: boolean = false;
  Contrats: Contrats[];

  Contrat: Contrats={};
  @Output() Contratprint = new EventEmitter<Contrats>();

  PContrat: Contrats={};
  Numpi: any;
  events:calender[]=[];
  title = ' Contrat';
  fileName= ' ContratExcelSheet.xlsx';
  constructor(private serice: SharedService) { }


  ngOnInit() {
    this.load();

  }
  load() {
    this.serice.getContrats().subscribe((dep) => {
      this.Contrats = dep;
    });
  }

  openNew() {
    this.Dialog = true;
    this.exp = true;
  }

  prolongation(val:any){
    this.PContrat=val;
    this.Dialog = true;
    this.exp = false;
  }


  deleteContrat(val: any) {
    this.serice.deleteContrat(val).subscribe((res) => alert(res));
    var events=
      { title: localStorage.getItem('CIN')+' deletecontrat', start: new Date().toString() };
    this.serice.addcalender(events).subscribe((res) => alert(res));
    this.load();
  }

  filterGlobal(val: any) {}

  hideDialog() {
    this.Dialog = false;
  }
  printpdf(val:any){
    this.Contratprint.emit(val);

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
