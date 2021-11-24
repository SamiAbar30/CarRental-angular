import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Contrats } from 'src/app/Contrats';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-prolongation',
  templateUrl: './prolongation.component.html',
  styleUrls: ['./prolongation.component.scss']
})
export class ProlongationComponent implements OnInit {
  Duree:any;
  Duree_retour: Date=new Date();
  prix:any;
  total:any;
  montantapayer:any;
  restmontant:any;
  @Input() Contrats: Contrats = {};
  constructor(private serice: SharedService,public datepipe: DatePipe) { }
 
  ngOnInit(): void {
  }
  OnChangeduree(event: any)
  {
    var date=new Date(this.Contrats.Duree_retour?.toString()??'');

    this.Duree_retour.setDate(date.getDate() +Number(event));
    this.Contrats.Duree_retour=this.datepipe.transform(this.Duree_retour, 'yyyy-MM-dd')?.toString();
    
  }

  OnChangeprix(event: any){
    this.Contrats.Total=Number(this.Contrats.Total)+(Number(this.Contrats.Duree) * Number(event));
  }
  OnChangemontantP(event: any){
    this.Contrats.restmontant=Number(this.Contrats.Total)+( Number(this.Contrats.Total)-Number(event));
  }
  Success() {
    this.Contrats.realise_par_user=localStorage.getItem('CIN')?.toString();
    this.Contrats.Duree+=this.Duree;
    console.log(this.Contrats);
    
      this.serice.updateContrat(this.Contrats).subscribe((res) => alert(res));
      var events=
        { title: localStorage.getItem('login')+' add a prolongation', start: new Date().toString() };
      this.serice.addcalender(events).subscribe((res) => alert(res));
  }
}
