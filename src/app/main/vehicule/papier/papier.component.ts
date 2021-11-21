import { calender } from './../../../calender';
import { DatePipe } from '@angular/common';
import { papier } from './../../../papier';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from './../../../shared.service';
@Component({
  selector: 'app-papier',
  templateUrl: './papier.component.html',
  styleUrls: ['./papier.component.scss'],
})
export class PapierComponent implements OnInit {
  value: Date;
  @Input() Immatricule: any;
  papiers: papier[];
  papier: papier={};
  delevreleAssurance: Date;
  datefinAssurance: Date;

  delevrelevisite: Date;
  datefinvisite: Date;

  delevrelegrise: Date;
  datefingrise: Date;

  delevreleautoristion: Date;
  datefinautoristion: Date;
 item:papier={};
 events:calender[]=[];
  constructor(private serice: SharedService,public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.load(this.Immatricule);
  }
  load(Immatricule:any) {
    this.serice.getpapier(this.Immatricule).subscribe((dep) => {
      this.papiers = dep;
    });

  }

  fullitem() {
    this.item.immatricule= this.Immatricule;
    this.item.date_debut_assurance =this.datepipe.transform(this.delevreleAssurance,"yyyy-MM-dd")?.toString();
    this.item.date_fin_assurance =this.datepipe.transform(this.datefinAssurance,"yyyy-MM-dd")?.toString();

    this.item.date_debut_visite =this.datepipe.transform(this.delevrelevisite,"yyyy-MM-dd")?.toString();
    this.item.date_fin_visite =this.datepipe.transform(this.datefinvisite,"yyyy-MM-dd")?.toString();

    this.item.date_debut_grise =this.datepipe.transform(this.delevrelegrise,"yyyy-MM-dd")?.toString();
    this.item.date_fin_grise =this.datepipe.transform(this.datefingrise,"yyyy-MM-dd")?.toString();

    this.item.date_debut_autoristion =this.datepipe.transform(this.delevreleautoristion,"yyyy-MM-dd")?.toString();
    this.item.date_fin_autoristion =this.datepipe.transform(this.datefinautoristion,"yyyy-MM-dd")?.toString();

  }
  addpapier() {
    this.fullitem();
    this.serice.addpapier(this.item).subscribe((res) => alert(res));
   var events=
      { title: localStorage.getItem('login')+' addpapier', start: new Date().toString() };

    this.serice.addcalender(events).subscribe((res) => alert(res));
  }
}
