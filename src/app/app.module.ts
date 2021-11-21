import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuModule } from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ClientComponent } from './main/client/client.component';
import { CreateclientComponent } from './main/client/createclient/createclient.component';
import { TableclientComponent } from './main/client/tableclient/tableclient.component';
import { VehiculeComponent } from './main/vehicule/vehicule.component';
import { TablevehiculeComponent } from './main/vehicule/tablevehicule/tablevehicule.component';
import { CreatevehiculeComponent } from './main/vehicule/createvehicule/createvehicule.component';
import { PapierComponent } from './main/vehicule/papier/papier.component';
import { VidangeComponent } from './main/vehicule/vidange/vidange.component';
import { EntretienComponent } from './main/vehicule/entretien/entretien.component';
import { AgenceComponent } from './main/agence/agence.component';
import { UserComponent } from './main/user/user.component';
import { LoginComponent } from './main/login/login.component';
import { ContratComponent } from './main/contrat/contrat.component';
import { CreatecontratComponent } from './main/contrat/createcontrat/createcontrat.component';
import { VoituredispoComponent } from './main/contrat/createcontrat/voituredispo/voituredispo.component';
import { CliantdispoComponent } from './main/contrat/createcontrat/cliantdispo/cliantdispo.component';
import { AlerteComponent } from './main/alerte/alerte.component';
import { AdduserComponent } from './main/user/adduser/adduser.component';
import { StatistiquesvehiclesComponent } from './main/vehicule/statistiquesvehicles/statistiquesvehicles.component';

import { CalenderComponent } from './main/calender/calender.component';
import { PrimengModule } from './primeng/primeng.module';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { ChartModule } from 'primeng/chart';
import { DatePipe } from '@angular/common';

import {FullCalendarModule} from 'primeng/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { TableupdateKMComponent } from './main/dashboard/tableupdate-km/tableupdate-km.component'; // a plugin!
import { TableVComponent } from './main/dashboard/tablevehicule/tableV.component'; // a plugin!


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    ClientComponent,
    CreateclientComponent,
    TableclientComponent,
    VehiculeComponent,
    TablevehiculeComponent,
    CreatevehiculeComponent,
    PapierComponent,
    VidangeComponent,
    EntretienComponent,
    AgenceComponent,
    UserComponent,
    LoginComponent,
    ContratComponent,
    CreatecontratComponent,
    VoituredispoComponent,
    CliantdispoComponent,
    AlerteComponent,
    AdduserComponent,
    StatistiquesvehiclesComponent,
    CalenderComponent,
    HeaderComponent,
    TableupdateKMComponent,
    TableVComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    PrimengModule,
    ChartModule,
    FullCalendarModule,
    ButtonModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
