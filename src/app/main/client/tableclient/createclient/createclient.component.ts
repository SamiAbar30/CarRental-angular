import { DatePipe } from '@angular/common';
import { calender } from './../../../calender';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Clients } from './../../../Clients';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.scss'],
})
export class CreateclientComponent implements OnInit{
  image1: Observable<any>;
  image2: Observable<any>;
  image3: Observable<any>;
  image4: Observable<any>;
  image5: Observable<any>;
  image6: Observable<any>;
  itemimage1: any = 'assets/images/68311.jpg';
  itemimage2: any = 'assets/images/68311.jpg';
  itemimage3: any = 'assets/images/68311.jpg';
  itemimage4: any = 'assets/images/68311.jpg';
  itemimage5: any = 'assets/images/68311.jpg';
  itemimage6: any = 'assets/images/68311.jpg';
  selectedValue?: string;
  value: string;
  checked: boolean = true;
  Cliants: Clients={};
  @Input() item: Clients={};
  @Input() Numpi: any;
  sexe: any[] = [];
  type_PI: any[] = [];
  selectedSexe: any={name: ''};
  selectedtype_PI: any={name: ''};

  datenaissance: Date=new Date();
  validite: Date=new Date();
  delevrele: Date=new Date();
  Validite_pi: Date=new Date();
events:calender[]=[];
  constructor(private serice: SharedService,public datepipe: DatePipe) {}

  ngOnInit(): void {
    this.sexe = [{ name: 'Mr' }, { name: 'Ms' }];
    this.type_PI = [{ name: 'carte national' }, { name: 'passeport' }];
    this.ngOnChanges();
  }
  changetype(vare:any){
    this.item.Clienttype=vare;
  }
  ngOnChanges(){
    this.itemimage1 = this.item.identiteimg_recto ?? 'assets/images/68311.jpg';
    this.itemimage2 = this.item.identiteimg_verso ?? 'assets/images/68311.jpg';
    this.itemimage3 = this.item.permi_recto ??'assets/images/68311.jpg';
    this.itemimage4 = this.item.permi_verso ??'assets/images/68311.jpg';
    this.itemimage5 = this.item.passeport_recto ??'assets/images/68311.jpg';
    this.itemimage6 = this.item.passeport_verso ??'assets/images/68311.jpg';
    this.selectedSexe.name= this.item.Civilite;
    this.selectedtype_PI.name=this.item.Type_pi;
  }
  fullitem() {
    this.item.Date_de_naissance =this.datepipe.transform(this.datenaissance,"yyyy-MM-dd")?.toString();
    this.item.Validite =this.datepipe.transform(this.validite,"yyyy-MM-dd")?.toString();
    this.item.Delivre_le =this.datepipe.transform(this.delevrele,"yyyy-MM-dd")?.toString();
    this.item.Validite_pi =this.datepipe.transform(this.Validite_pi,"yyyy-MM-dd")?.toString();
    this.item.Civilite = this.selectedSexe.name;
    this.item.Type_pi = this.selectedtype_PI.name;
  }
  AddClients() {
   this.fullitem();

   this.serice.addClients(this.item).subscribe((res) => alert(res));
    var events={ title: localStorage.getItem('login')+' Addcliant', start: new Date().toString() };
    this.serice.addcalender(events).subscribe((res) => alert(res));
  }

  updateClients() {
  this.fullitem();
    this.serice.updateClients(this.item).subscribe((res) => alert(res));
    var events={ title: localStorage.getItem('login')+' updatecliant', start: new Date().toString() };
    this.serice.addcalender(events).subscribe((res) => alert(res));
  }
  async onimage1($event: any) {
    var file = $event.target.files[0];
    this.image1 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image1.subscribe((x) => {
      this.item.identiteimg_recto = x;
    });
  }
  async onimage2($event: any) {
    var file = $event.target.files[0];
    this.image2 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image2.subscribe((x) => {
      this.item.identiteimg_verso = x;
    });
  }
  async onimage3($event: any) {
    var file = $event.target.files[0];
    this.image3 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image3.subscribe((x) => {
      this.item.permi_recto = x;
    });
  }
  async onimage4($event: any) {
    var file = $event.target.files[0];
    this.image4 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image4.subscribe((x) => {
      this.item.permi_verso = x;
    });
  }
  async onimage5($event: any) {
    var file = $event.target.files[0];
    this.image5 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image5.subscribe((x) => {
      this.item.passeport_recto = x;
    });
  }

  async onimage6($event: any) {
    var file = $event.target.files[0];
    this.image6 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    await this.image6.subscribe((x) => {
      this.item.passeport_verso = x;
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
