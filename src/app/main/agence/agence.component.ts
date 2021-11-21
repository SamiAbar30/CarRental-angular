import { calender } from './../../calender';
import { Agence } from './../../Agence';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.scss'],
})
export class AgenceComponent implements OnInit {
  Agences: Agence[] = [];
  Agence: Agence = {};
  image: Observable<any>;
  itemimage: any = 'assets/images/68311.jpg';
  events: calender[];
  constructor(private serice: SharedService) {}

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.serice.getAgence().subscribe((dep) => {
      this.Agences = dep;
    });
  }


  updateAgence() {
    this.serice.updateAgence(this.Agences[0]).subscribe((res) => alert(res));
    var events=
      { title: localStorage.getItem('login')+' updateAgence', start: new Date().toString() };

    this.serice.addcalender(events).subscribe((res) => alert(res));
  }
  async onimage($event: any) {
    var file = $event.target.files[0];
    this.image = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image.subscribe((x) => {
      this.Agence.Logo = x;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}
