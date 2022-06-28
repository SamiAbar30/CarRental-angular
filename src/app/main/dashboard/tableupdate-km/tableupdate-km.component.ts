import { SharedService } from 'src/app/shared.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableupdate-km',
  templateUrl: './tableupdate-km.component.html',
  styleUrls: ['./tableupdate-km.component.scss']
})
export class TableupdateKMComponent implements OnInit {
  @Input() vehiculeKM: any[]=[];
   Kilometrage:any;
  constructor(private serice: SharedService) { }

  ngOnInit(): void {
  }
  edit(val:any){

    var dashV=
    { idContrats: val.idContrats , Kilometrage: this.Kilometrage, Immatricule:  val.Immatricule};

     this.serice.updatevehiculesKM(dashV).subscribe((res) => alert(res));
    var events=
      { title: localStorage.getItem('CIN')+' update KMvehicules', start: new Date().toString() };
    this.serice.addcalender(events).subscribe((res) => alert(res));
  }
}
