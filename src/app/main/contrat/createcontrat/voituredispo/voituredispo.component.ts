import { SharedService } from 'src/app/shared.service';
import { Vehicules } from './../../../../Vehicules';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-voituredispo',
  templateUrl: './voituredispo.component.html',
  styleUrls: ['./voituredispo.component.scss']
})
export class VoituredispoComponent implements OnInit {
  @Output() Vehicule = new EventEmitter<Vehicules>();
  @Output() dialog=new EventEmitter<boolean>();
  Vehicules: Vehicules[]=[];

  constructor(private serice: SharedService) { }

  ngOnInit(): void {
    this.load();
  }
  load(){
    this.serice.Vehiculedisp().subscribe((dep) => {
      this.Vehicules = dep;
    });
  }
  submit(Vehicule:any){
    this.Vehicule.emit(Vehicule);
    this.dialog.emit(false);
  }
}
