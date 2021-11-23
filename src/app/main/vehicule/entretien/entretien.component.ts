import { DatePipe } from '@angular/common';
import { calender } from './../../../calender';
import { SharedService } from './../../../shared.service';
import { Component, OnInit } from '@angular/core';
import { Entretien } from 'src/app/Entretien';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.scss'],
})
export class EntretienComponent implements OnInit {
  Date_Entretien: Date = new Date();
  Entretiens: Entretien[] = [];
  Entretien: Entretien = {};
  Immatricules: any[] = [];
  Immatriculeselect: any = { Immatricule: '' };
  events: calender[] = [];
  constructor(private serice: SharedService, public datepipe: DatePipe) {}
  ngOnInit(): void {
    this.VehiclesImmatricule();
    this.load();
  }
  VehiclesImmatricule() {
    this.serice.VehiclesImmatricule().subscribe((dep) => {
      this.Immatricules = dep;
    });
  }
  load() {
    this.serice.getEntretien().subscribe((dep) => {
      this.Entretiens = dep;
    });
  }
  AddEntretien() {
    this.fulldate();
   

    this.serice.addEntretien(this.Entretien).subscribe((res) => alert(res));
    var events = {
      title: localStorage.getItem('login') + ' addEntretien',
      start: new Date().toString(),
    };

    this.serice.addcalender(events).subscribe((res) => alert(res));
  }

  delet(val: any) {
    this.serice.deleteEntretien(val).subscribe((res) => alert(res));
    var events = {
      title: localStorage.getItem('login') + ' deleteEntretien',
      start: new Date().toString(),
    };

    this.serice.addcalender(events).subscribe((res) => alert(res));
    this.load();
  }
  fulldate() {
    this.Entretien.Date_Entretien = this.datepipe
      .transform(this.Date_Entretien, 'yyyy-MM-dd')
      ?.toString();

    this.Entretien.Immatricule = this.Immatriculeselect.Immatricule==''?this.Immatricules[0].Immatricule:this.Immatriculeselect.Immatricule;
  }
}
