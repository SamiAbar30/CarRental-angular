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
  Date_Entretien: Date=new Date();
  Entretiens: Entretien[]=[];
  Entretien: Entretien={};
  Immatricules:any[];
  Immatriculeselect:any;
  events:calender[]=[];
  constructor(private serice: SharedService) {}
  ngOnInit(): void {
    this.VehiclesImmatricule();
    this.load();
  }
  VehiclesImmatricule(){
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
    this.events=[
      { title: localStorage.getItem('login')+' addEntretien', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
  }

  updateEntretien() {
    this.fulldate();
    this.serice.updateEntretien(this.Entretien).subscribe((res) => alert(res));
    this.events=[
      { title: localStorage.getItem('login')+' updateEntretien', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
  }
  delet(val: any) {
    this.serice.deleteEntretien(val).subscribe((res) => alert(res));
    this.events=[
      { title: localStorage.getItem('login')+' deleteEntretien', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
    this.load();
  }
  fulldate(){this.Entretien.Date_Entretien =
    this.Date_Entretien.getDay().toString() +
    '/' +
    this.Date_Entretien.getMonth().toString() +
    '/' +
    this.Date_Entretien.getFullYear().toString();
    }
}
