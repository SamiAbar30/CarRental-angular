import { calender } from './../../../calender';
import { SharedService } from 'src/app/shared.service';
import { Contrats } from './../../../Contrats';
import { Clients } from './../../../Clients';
import { Vehicules } from './../../../Vehicules';
import { Component, Input, OnInit, Output, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-createcontrat',
  templateUrl: './createcontrat.component.html',
  styleUrls: ['./createcontrat.component.scss'],
})
export class CreatecontratComponent implements OnInit {
  Datecontrat: Date = new Date();
  realise_par_user: any;
  Dialog1: boolean;
  Dialog2: boolean;
  Dialog3: boolean;
  vehicule: Vehicules = {};
  cliant: Clients = {};
  cliant2: Clients = {};
  Contrats: Contrats = {};
  Duree_depart: Date=new Date();
  Duree_retour: Date=new Date();
  montantapayer:any;
  events:calender[]=[];
  constructor(private serice: SharedService,public datepipe: DatePipe) {}

  ngOnInit(): void {}
  OnChangeduree(event: any)
  {
    this.Contrats.Duree_depart=this.datepipe.transform(new Date(), 'yyyy-MM-dd')?.toString();
    this.Duree_depart=new Date();
    this.Duree_retour=new Date(this.Duree_depart);
    this.Contrats.Duree_retour=this.Duree_retour.setDate(this.Duree_retour.getDate() + Number(event)).toString();
  }
  OnChangeDuree_depart(event: any){
    var Duree_retour:Date= new Date(event);
    this.Duree_retour=new Date(Duree_retour.setDate(Duree_retour.getDate() + Number( this.Contrats.Duree)));
    this.Contrats.Duree_retour=Duree_retour.setDate(Duree_retour.getDate() + Number( this.Contrats.Duree)).toString();
  }
  OnChangeDuree_retour(event: any){
   var Duree_retour:Date= new Date(event);
    this.Contrats.Duree_depart=Duree_retour.setDate(Duree_retour.getDate() - Number(this.Contrats.Duree)).toString();
  }

  OnChangeprix(event: any){
    this.Contrats.Total= Number(this.Contrats.Duree) * Number(event);
  }
  OnChangemontantP(event: any){
    this.Contrats.restmontant= Number(this.Contrats.Total)-Number(event);
  }

  openNew() {
    this.Dialog1 = true;
  }
  openNew1() {
    this.Dialog2 = true;
  }
  openNew2() {
    this.Dialog3 = true;
  }
  outputvehicule(event: any) {
    this.vehicule = event;
  }
  outputDialog(event: any) {
    this.Dialog1 = event;
    this.Dialog2 = event;
    this.Dialog3 = event;
  }
  outputcliant1(event: any) {
    this.cliant = event;
  }
  outputcliant2(event: any) {
    this.cliant2 = event;
  }

  Success() {
    this.Contrats.Datecontrat =this.datepipe.transform( this.Datecontrat,"yyyy-MM-dd")?.toString();
    this.Contrats.realise_par_user = this.realise_par_user;
    this.Contrats.Marque = this.vehicule.Marque;
    this.Contrats.Immatricule = this.vehicule.Immatricule;
    this.Contrats.Km_actuel = this.vehicule.Kilometrage;
    this.Contrats.numpi = this.cliant.Numpi;
    this.Contrats.numpi2 = this.cliant2.Numpi;
    this.serice.addContrat(this.Contrats).subscribe((res) => alert(res));
    this.events=[
      { title: localStorage.getItem('login')+' Addcliant', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
  }
}
