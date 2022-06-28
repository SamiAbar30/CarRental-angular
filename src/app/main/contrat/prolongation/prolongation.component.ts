import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Contrats } from 'src/app/Contrats';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-prolongation',
  templateUrl: './prolongation.component.html',
  styleUrls: ['./prolongation.component.scss'],
})
export class ProlongationComponent implements OnInit {
  Duree: number;
  Duree_retour: Date = new Date();
  prix: number;
  total: number;
  montantapayer: number;
  restmontant: number;
  @Input() Contrats: Contrats = {};
  Total: number;
  constructor(private serice: SharedService, public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.Total = Number(this.Contrats.Total);
  }
  OnChangeduree(event: any) {
    this.Duree = event;
    var date = new Date(this.Contrats.Duree_retour?.toString() ?? '');

    this.Duree_retour.setDate(date.getDate() + Number(event));
    this.Contrats.Duree_retour = this.datepipe.transform(this.Duree_retour, 'yyyy-MM-dd')?.toString();
  }

  OnChangeprix(event: any) {
    this.Contrats.Total = this.Total + Number(this.Duree) * Number(event);
    this.OnChangemontantP(0);
  }
  OnChangemontantP(event: any) {
    this.montantapayer = event;
    this.Contrats.restmontant =Number(this.Contrats.Total) +(Number(this.Contrats.Total) - Number(event));
  }
  Success() {
    this.Contrats.realise_par_user = localStorage.getItem('CIN')?.toString();
    this.Contrats.Duree = Number(this.Contrats.Duree)+this.Duree;
    this.Contrats.montantPayé = Number(this.Contrats.montantPayé)+this.montantapayer;
    this.serice.updateContrat(this.Contrats).subscribe((res) => alert(res));
    var events = {
      title: localStorage.getItem('CIN') + ' add a prolongation',
      start: new Date().toString(),
    };
    this.serice.addcalender(events).subscribe((res) => alert(res));
  }
}
