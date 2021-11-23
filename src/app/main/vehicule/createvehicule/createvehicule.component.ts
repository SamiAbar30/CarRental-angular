import { calender } from './../../../calender';
import { DatePipe } from '@angular/common';
import { SharedService } from './../../../shared.service';
import { Vehicules } from './../../../Vehicules';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
@Component({
  selector: 'app-createvehicule',
  templateUrl: './createvehicule.component.html',
  styleUrls: ['./createvehicule.component.scss'],
})
export class CreatevehiculeComponent implements OnInit,OnChanges {
  image1: Observable<any>;
  image2: Observable<any>;
  image3: Observable<any>;
  image4: Observable<any>;
  image5: Observable<any>;

  itemimage1: any = 'assets/images/68311.jpg';
  itemimage2: any = 'assets/images/68311.jpg';
  itemimage3: any = 'assets/images/68311.jpg';
  itemimage4: any = 'assets/images/68311.jpg';
  itemimage5: any = 'assets/images/68311.jpg';

  selectedValue?: string;
  value: string;
  checked: boolean = true;
  Vehicule: Vehicules={};
  @Input() item: Vehicules={};
  Disponibilite: any[] = [];
  Carburant: any[] = [];
  @Input() Numpi: any={};
  selectDisponibilite: any={name: ''};
  selectCarburant: any={name: ''};
  events:calender[]=[];
  Date_MEC: Date=new Date();
  constructor(private serice: SharedService,public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.Disponibilite = [{ name: 'oui' }, { name: 'non' }];
    this.Carburant = [{ name: 'carte national' }, { name: 'passeport' }];
  }

  ngOnChanges(): void {
    this.itemimage1 = this.item.carimg?? 'assets/images/68311.jpg';
    this.itemimage2 = this.item.cartegrise_recto?? 'assets/images/68311.jpg';
    this.itemimage3 = this.item.cartegrise_verso?? 'assets/images/68311.jpg';
    this.itemimage4 = this.item.image3_recto?? 'assets/images/68311.jpg';
    this.itemimage5 = this.item.image4_verso?? 'assets/images/68311.jpg';
    this.Date_MEC = this.item.Date_MEC? new Date(this.item.Date_MEC.toString()): new Date();
    this.selectDisponibilite.name=this.item.Disponibilite;
    this.selectCarburant.name= this.item.Carburant;
  }
  fullitem() {
    this.item.Date_MEC =this.datepipe.transform(this.Date_MEC,"yyyy-MM-dd")?.toString();
    this.item.Disponibilite = this.selectDisponibilite.name;
    this.item.Carburant = this.selectCarburant.name;
  }
  AddVehicules() {
    this.fullitem();
    this.serice.addVehicules(this.item).subscribe((res) => alert(res));
    var events=
      { title: localStorage.getItem('login')+' AddVehicules', start: new Date().toString() };
    this.serice.addcalender(events).subscribe((res) => alert(res));
  }

  updateVehicules() {
    this.fullitem();
    this.serice.updateVehicules(this.item).subscribe((res) => alert(res));
    var events=[
      { title: localStorage.getItem('login')+' updateVehicules', start: new Date().toString() }
    ]
    this.serice.addcalender(events).subscribe((res) => alert(res));
  }
  async onimage1($event: any) {
    var file = $event.target.files[0];
    this.image1 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image1.subscribe((x) => {
      this.item.carimg = x;
    });
  }
  async onimage2($event: any) {
    var file = $event.target.files[0];
    this.image2 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image2.subscribe((x) => {
      this.item.cartegrise_recto = x;
    });
  }
  async onimage3($event: any) {
    var file = $event.target.files[0];
    this.image3 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image3.subscribe((x) => {
      this.item.cartegrise_verso = x;
    });
  }
  async onimage4($event: any) {
    var file = $event.target.files[0];
    this.image4 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image4.subscribe((x) => {
      this.item.image3_recto = x;
    });
  }
  async onimage5($event: any) {
    var file = $event.target.files[0];
    this.image5 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image5.subscribe((x) => {
      this.item.image4_verso = x;
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
