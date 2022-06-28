import { Agence } from './../../../Agence';
import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { async } from '@firebase/util';

import { Clients } from 'src/app/Clients';
import { Contrats } from 'src/app/Contrats';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-contratpdf',
  templateUrl: './contratpdf.component.html',
  styleUrls: ['./contratpdf.component.scss']
})
export class ContratpdfComponent implements OnInit {

  @Input()Contrats: Contrats;
  @Input()Cliant1: Clients;
  @Input()Cliant2: Clients;
  Agence:Agence[]=[];
  @Output() exp = new EventEmitter<boolean>();
  constructor(private serice: SharedService) { }

  ngOnInit(){
    this.serice.getAgence().subscribe((dep) => {
      this.Agence = dep;
      setTimeout(() => {
        window.print();
        this.exp.emit(false);
      }, 5000);
    });


  }


}
