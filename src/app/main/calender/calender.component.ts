import { SharedService } from 'src/app/shared.service';
import  interactionPlugin  from '@fullcalendar/interaction';
import  timeGridPlugin  from '@fullcalendar/timegrid';
import  dayGridPlugin  from '@fullcalendar/daygrid';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  events: any[];

  options: any;

  header: any;
  constructor(private serice: SharedService) {}

  ngOnInit(): void {
    this.serice.getcalender().subscribe((dep) => {
      this.events = dep;
    });

    this.options = {
      plugins:[dayGridPlugin,timeGridPlugin,interactionPlugin],
      defaulDate:new Date(),
      header:{
        left:'prev,next',
        center:'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }
    };
  }
}
