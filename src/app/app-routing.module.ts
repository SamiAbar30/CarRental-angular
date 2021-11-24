import { VehiculeComponent } from './main/vehicule/vehicule.component';
import { PapierComponent } from './main/vehicule/papier/papier.component';
import { StatistiquesvehiclesComponent } from './main/vehicule/statistiquesvehicles/statistiquesvehicles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableclientComponent } from './main/client/tableclient/tableclient.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { CreatevehiculeComponent } from './main/vehicule/createvehicule/createvehicule.component';
import { TablevehiculeComponent } from './main/vehicule/tablevehicule/tablevehicule.component';
import { VidangeComponent } from './main/vehicule/vidange/vidange.component';
import { EntretienComponent } from './main/vehicule/entretien/entretien.component';
import { ContratComponent } from './main/contrat/contrat.component';

import { AlerteComponent } from './main/alerte/alerte.component';
import { UserComponent } from './main/user/user.component';
import { AgenceComponent } from './main/agence/agence.component';
import { CalenderComponent } from './main/calender/calender.component';
import { CreateclientComponent } from './main/client/tableclient/createclient/createclient.component';

const routes: Routes = [
  {path:'agence',component:AgenceComponent},
  {path:'calender',component:CalenderComponent},
  {path:'Settings',component:UserComponent},
  {path:'alerte',component:AlerteComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'contrat',component:ContratComponent},
  {path:'client/createclient',component:CreateclientComponent},
  {path:'client/tableclient',component:TableclientComponent},
  {path:'vehicule',component:VehiculeComponent,children:[
  {path:'createvehicule',component:CreatevehiculeComponent},
  {path:'statistiquesvehicles',component:StatistiquesvehiclesComponent},
  {path:'tablevehicule',component:TablevehiculeComponent},
  {path:'vidange',component:VidangeComponent},
  {path:'entretien',component:EntretienComponent}]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
