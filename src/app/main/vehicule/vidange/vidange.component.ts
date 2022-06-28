import { DatePipe } from '@angular/common';
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
  Vidanges: Vidange[] =[];
  Vidange: Vidange = {};
  Immatricules: any[]=[];
  Immatriculeselect: any={Immatricule:''};
  events: calender[]=[];
  constructor(private serice: SharedService,public datepipe: DatePipe) {}

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
         var events=
       { title: localStorage.getItem('CIN')+' addVidange', start: new Date().toString() };
     this.serice.addcalender(events).subscribe((res) => alert(res));
     this.load();
  }


  deleteVidange(val: any) {
    this.serice.deleteVidange(val).subscribe((res) => alert(res));
    var events=
      { title: localStorage.getItem('CIN')+' deleteVidange', start: new Date().toString() };
    this.serice.addcalender(events).subscribe((res) => alert(res));
    this.load();

  }
  fulldate() {
    this.Vidange.Date =this.datepipe.transform(this.Date,"yyyy-MM-dd")?.toString();
    this.Vidange.Immatricule = this.Immatriculeselect.Immatricule==''?this.Immatricules[0].Immatricule:this.Immatriculeselect.Immatricule;
  }
}
