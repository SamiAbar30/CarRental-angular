import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.scss']
})
export class AlerteComponent implements OnInit {
  Alertes: any;

  Alerte: any;
  constructor(private serice: SharedService) { }

  ngOnInit(): void {

    this.load();

  }
load(){
  this.serice.getAlerte().subscribe((dep) => {
    this.Alertes = dep;
  });
}
}
