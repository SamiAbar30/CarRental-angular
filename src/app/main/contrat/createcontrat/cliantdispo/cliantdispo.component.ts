import { SharedService } from 'src/app/shared.service';
import { Clients } from './../../../../Clients';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cliantdispo',
  templateUrl: './cliantdispo.component.html',
  styleUrls: ['./cliantdispo.component.scss'],
})
export class CliantdispoComponent implements OnInit {
  @Output() Client = new EventEmitter<Clients>();
  @Output() dialog=new EventEmitter<boolean>();
  Clients: Clients[];
  constructor(private serice: SharedService) {}

  ngOnInit(): void {
    this.load();
  }
  load(){
    this.serice.getClients().subscribe((dep) => {
      this.Clients = dep;
    });
  }
  submit(Client:any){
    this.Client.emit(Client);
    this.dialog.emit(false);
  }
}
