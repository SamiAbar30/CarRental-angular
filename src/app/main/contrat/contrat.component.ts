import { calender } from './../../calender';
import { SharedService } from './../../shared.service';
import { Contrats } from './../../Contrats';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {
  Dialog: boolean;

  Contrats: Contrats[];

  Contrat: Contrats;
  Numpi: any;
  events:calender[]=[];
  title = ' Contrat';
  fileName= ' ContratExcelSheet.xlsx';
  
  constructor(private serice: SharedService) {}

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
  }


  deleteContrat(val: any) {
    this.serice.deleteContrat(val).subscribe((res) => alert(res));
    var events=
      { title: localStorage.getItem('login')+' deletecontrat', start: new Date().toString() };
    this.serice.addcalender(events).subscribe((res) => alert(res));
    this.load();
  }

  filterGlobal(val: any) {}

  hideDialog() {
    this.Dialog = false;
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
