import { Contrats } from './../../Contrats';

import { Component, OnInit, Input } from '@angular/core';
import { Clients } from 'src/app/Clients';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss'],
})
export class ContratComponent implements OnInit {
  Contrat: Contrats = {};
  Cliant1: Clients[] = [];
  Cliant2: Clients[] =[];
  exp: boolean = false;
  constructor(private serice: SharedService) {}

  ngOnInit() {}

   outputvehicule(event: any) {

    this.Contrat = event;
     this.serice.getClient(this.Contrat.numpi).subscribe((dep) => {
        this.Cliant1 = dep;
        this.serice.getClient(this.Contrat.numpi2).subscribe((dep) => {
          this.Cliant2 = dep;
          this.exp = true;
        });
      });

  }
  expfun(event: any) {
    this.exp = event;
  }
}
