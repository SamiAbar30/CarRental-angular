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
  alertAssurance:any;
  alertvisite:any;
  alertgrise:any;
  alertautoristion:any;
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
      this.loadpap();
    });

  }
  loadpap() {
    this.delevreleAssurance= new Date(this.papiers[0].date_debut_assurance?.toString()??new Date()) ;
    this.datefinAssurance=new Date(this.papiers[0].date_fin_assurance?.toString()??new Date()) ;

    this.delevrelevisite=new Date(this.papiers[0].date_debut_visite?.toString()??new Date()) ;
     this.datefinvisite=new Date(this.papiers[0].date_fin_visite?.toString()??new Date()) ;

     this.delevrelegrise=new Date(this.papiers[0].date_debut_grise?.toString()??new Date()) ;
    this.datefingrise=new Date(this.papiers[0].date_fin_grise ?.toString()??new Date()) ;

     this.delevreleautoristion=new Date(this.papiers[0].date_debut_autoristion?.toString()??new Date()) ;
     this.datefinautoristion=new Date(this.papiers[0].date_fin_autoristion?.toString()??new Date()) ;

     this.alertAssurance=this.item.alertAssurance;
     this.alertvisite=this.item.alertvisite;
     this.alertgrise=this.item.alertgrise;
     this.alertautoristion=this.item.alertautoristion;
  }
  fullitem() {
    this.item.immatricule= this.Immatricule;
    this.item.date_debut_assurance =this.datepipe.transform(this.delevreleAssurance,"yyyy-MM-dd")?.toString();
    this.item.date_fin_assurance =this.datepipe.transform(this.datefinAssurance,"yyyy-MM-dd")?.toString();

    this.item.date_debut_visite =this.datepipe.transform(this.delevrelevisite,"yyyy-MM-dd")?.toString();
    this.item.date_fin_visite =this.datepipe.transform(this.datefinvisite,"yyyy-MM-dd")?.toString();

    this.item.alertAssurance=this.alertAssurance;
    this.item.alertvisite=this.alertvisite
    this.item.alertgrise=this.alertgrise;
    this.item.alertautoristion=this.alertautoristion;
    this.item.date_debut_grise =this.datepipe.transform(this.delevrelegrise,"yyyy-MM-dd")?.toString();
    this.item.date_fin_grise =this.datepipe.transform(this.datefingrise,"yyyy-MM-dd")?.toString();

    this.item.date_debut_autoristion =this.datepipe.transform(this.delevreleautoristion,"yyyy-MM-dd")?.toString();
    this.item.date_fin_autoristion =this.datepipe.transform(this.datefinautoristion,"yyyy-MM-dd")?.toString();

  }
  addpapier() {
    this.fullitem();
    this.serice.addpapier(this.item).subscribe((res) => alert(res));
   var events=
      { title: localStorage.getItem('CIN')+' addpapier', start: new Date().toString() };

    this.serice.addcalender(events).subscribe((res) => alert(res));
  }
}
