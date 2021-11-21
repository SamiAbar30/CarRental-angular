import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit(): void {
    this.items = [
      {label: 'Tablevehicule', icon: 'pi pi-fw pi-home',routerLink:"tablevehicule"},
      {label: 'statistiquesvehicles', icon: 'pi pi-fw pi-calendar',routerLink:"statistiquesvehicles"},
      {label: 'vidange', icon: 'pi pi-fw pi-file',routerLink:"vidange"},
      {label: 'entretien', icon: 'pi pi-fw pi-cog',routerLink:"entretien"}
  ];

  this.activeItem = this.items[0];
  }

}
