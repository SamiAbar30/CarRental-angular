import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  basicData: any;
  lineStylesData: any;
  basicOptions: any;
  events1: any[] = [];
  vehiculesoui: any[] = [];
  vehiculesnone: any[] = [];
  vehiculesproch: any[] = [];
  vehiculesKM: any[] = [];
  revenuees: any[] = [];
  depances: any[] = [];
  contrat: any[] = [];
  tableV: boolean = false;
  vehicules: any[] = [];
  updatekm: boolean = false;
  vehiculeKM: any[] = [];
  Alertes: any = {};
  constructor(private serice: SharedService) {}

  ngOnInit(): void {
    this.serice.vehiculesoui().subscribe((dep) => {
      this.vehiculesoui = dep;
    });
    this.serice.vehiculesnone().subscribe((dep) => {
      this.vehiculesnone = dep;
    });
    this.serice.vehiculesproch().subscribe((dep) => {
      this.vehiculesproch = dep;
    });
    this.serice.vehiculesKM().subscribe((dep) => {
      this.vehiculesKM = dep;
    });
    this.serice.revenuees().subscribe((dep) => {
      this.revenuees = dep;
      this.BasicData();
    });
    this.serice.depances().subscribe((dep) => {
      this.depances = dep;
      this.BasicData();
    });
    this.serice.contrat().subscribe((dep) => {
      this.contrat = dep;
      this.LineStylesData();
    });
    this.serice.getAlerte().subscribe((dep) => {
      this.Alertes = dep;
    });
  }

  BasicData() {
    this.basicData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          label: 'Les revenuees',
          backgroundColor: '#42A5F5',
          data: this.revenuees,
        },
        {
          label: 'Les depances',
          backgroundColor: '#FFA726',
          data: this.depances,
        },
      ],
    };
  }
  LineStylesData() {
    this.lineStylesData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          label: 'contrat',
          data: this.contrat,
          fill: true,
          borderColor: '#FFA726',

          backgroundColor: 'rgba(255,167,38,0.2)',
        },
      ],
    };
  }

  opentable1(vare: any[]) {
    this.tableV = true;
    this.vehicules = vare;
  }
  opentable2(vare: any[]) {
    this.updatekm = true;
    this.vehiculeKM = vare;
  }
}
