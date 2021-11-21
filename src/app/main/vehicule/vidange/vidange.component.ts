import { calender } from './../../../calender';
import { Vidange } from './../../../Vidange';
import { SharedService } from './../../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vidange',
  templateUrl: './vidange.component.html',
  styleUrls: ['./vidange.component.scss'],
})
export class VidangeComponent implements OnInit {
  Date: Date = new Date();
  Vidanges: Vidange[] = [];
  Vidange: Vidange = {};
  Immatricules: any[];
  Immatriculeselect: any;
  events: calender[];
  constructor(private serice: SharedService) {}

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
    this.serice.getVidange().subscribe((dep) => {
      this.Vidanges = dep;
    });
  }
  addVidange() {
    this.fulldate();
    this.serice.addVidange(this.Vidange).subscribe((res) => alert(res));
        this.events=[
      { title: localStorage.getItem('login')+' addVidange', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
    this.load();
  }

  updateVidange() {
    this.fulldate();
    this.serice.updateVidange(this.Vidange).subscribe((res) => alert(res));
        this.events=[
      { title: localStorage.getItem('login')+' updateVidange', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
    this.load();
  }
  deleteVidange(val: any) {
    this.serice.deleteVidange(val).subscribe((res) => alert(res));
    this.events=[
      { title: localStorage.getItem('login')+' deleteVidange', start: new Date().toString() }
    ]
    this.serice.addcalender(this.events).subscribe((res) => alert(res));
    this.load();
    this.load();
  }
  fulldate() {
    this.Vidange.Date =
      this.Date.getDay().toString() +
      '/' +
      this.Date.getMonth().toString() +
      '/' +
      this.Date.getFullYear().toString();
  }
}
