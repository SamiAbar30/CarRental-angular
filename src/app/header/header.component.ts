import dayGridPlugin from '@fullcalendar/daygrid';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  hiddenul?:boolean=true;

  displaul()
  {
  this.hiddenul=!this.hiddenul;
  }

  calendarPlugins = [dayGridPlugin]; // important!
  ngOnInit(): void {

  }

}
