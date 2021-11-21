import { calender } from './../../../calender';
import { SharedService } from './../../../shared.service';
import { UserA } from './../../../UserA';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  @Input() item: UserA;
  @Input() Numpi: any;
  events:calender[]=[];
  constructor(private serice: SharedService) { }

  ngOnInit(): void {
  }
  Adduser() {

    this.serice.addUserA(this.item).subscribe((res) => alert(res));
    var events=
      { title: localStorage.getItem('login')+' Adduser', start: new Date().toString() }
    ;
    this.serice.addcalender(events).subscribe((res) => alert(res));

  }

  updateuser() {

    this.serice.updateUserA(this.item).subscribe((res) => alert(res));
    var events=[
      { title: localStorage.getItem('login')+' updateuser', start: new Date().toString() }
    ]
    this.serice.addcalender(events).subscribe((res) => alert(res));

  }
}
