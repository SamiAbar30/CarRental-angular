import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://test2022-001-site1.ftempurl.com/api";
  constructor(private http:HttpClient) { }
  //dashboard
  vehiculesoui():Observable<any[]>{
    return this.http.get<any>( this.APIUrl+'/dashboard/vehiculesoui');
  }
  vehiculesnone():Observable<any[]>{
    return this.http.get<any>( this.APIUrl+'/dashboard/vehiculesnone');
  }
  vehiculesproch():Observable<any[]>{
    return this.http.get<any>( this.APIUrl+'/dashboard/vehiculesproch');
  }
  vehiculesKM():Observable<any[]>{
    return this.http.get<any>( this.APIUrl+'/dashboard/vehiculesKM');
  }
  revenuees():Observable<any[]>{
    return this.http.get<any>( this.APIUrl+'/dashboard/revenuees');
  }
  depances():Observable<any[]>{
    return this.http.get<any>( this.APIUrl+'/dashboard/depances');
  }
  contrat():Observable<any[]>{
    return this.http.get<any>( this.APIUrl+'/dashboard/contrat');
  }
  updatevehiculesKM(val:any){
    return this.http.put(this.APIUrl+'/dashboard/updatevehiculesKM',val);
   }
//Alerte
getAlerte():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Alerte');
}
// Agence
getAgence():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Agence');
}
addAgence(val:any){
  return this.http.post(this.APIUrl+'/Agence',val);
 }
updateAgence(val:any){
 return this.http.put(this.APIUrl+'/Agence',val);
}

//calender
getcalender():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/calender');
}
 addcalender(val:any){
 return this.http.post(this.APIUrl+'/calender',val);
}
//Clients
CompteCliant(val:any):Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Clients/CompteCliant/'+val);
}
getClients():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Clients');
}
updateClients(val:any){
 return this.http.put(this.APIUrl+'/Clients',val);
}
 addClients(val:any){
 return this.http.post(this.APIUrl+'/Clients',val);
}
deleteClients(val:any){
 return this.http.delete(this.APIUrl+'/Clients/'+val);
}
//Vehicules
getStatistiquesVehicles(val:any):Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Vehicules/StatistiquesVehicles/'+val);
}
VehiclesImmatricule():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Vehicules/VehiclesImmatricule');
}
getVehicules():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Vehicules');
}
updateVehicules(val:any){
 return this.http.put(this.APIUrl+'/Vehicules',val);
}
addVehicules(val:any){
 return this.http.post(this.APIUrl+'/Vehicules',val);
}
deleteVehicules(val:any){
 return this.http.delete(this.APIUrl+'/Vehicules/'+val);
}

//Contrat
getContrats():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Contrats');
}

addContrat(val:any){
 return this.http.post(this.APIUrl+'/Contrats',val);
}
updateContrat(val:any){
  return this.http.put(this.APIUrl+'/Contrats',val);
 }
deleteContrat(val:any){
 return this.http.delete(this.APIUrl+'/Contrats/'+val);
}


//Entretien
getEntretien():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Entretien');
}
updateEntretien(val:any){
 return this.http.put(this.APIUrl+'/Entretien',val);
}
addEntretien(val:any){
 return this.http.post(this.APIUrl+'/Entretien',val);
}
deleteEntretien(val:any){
 return this.http.delete(this.APIUrl+'/Entretien/'+val);
}

//Vidange
getVidange():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/Vidange');
}
updateVidange(val:any){
 return this.http.put(this.APIUrl+'/Vidange',val);
}
 addVidange(val:any){
 return this.http.post(this.APIUrl+'/Vidange',val);
}
deleteVidange(val:any){
 return this.http.delete(this.APIUrl+'/Vidange/'+val);
}

//papier
getpapier(val:any):Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/papier/'+val);
}
addpapier(val:any){
 return this.http.put(this.APIUrl+'/papier',val);
}
//Login
Login(val:any){
  return this.http.post(this.APIUrl+'/Login',val);
 }

//UserA
getUserA():Observable<any[]>{
  return this.http.get<any>( this.APIUrl+'/UserA');
}
addUserA(val:any){
 return this.http.post(this.APIUrl+'/UserA',val);
}
updateUserA(val:any){
 return this.http.put(this.APIUrl+'/UserA',val);
}
deleteUserA(val:any){
 return this.http.delete(this.APIUrl+'/UserA/'+val);
}


}
