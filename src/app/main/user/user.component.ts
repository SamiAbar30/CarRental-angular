import { UserA } from './../../UserA';
import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 users:UserA[]=[];
 user:UserA={};
 productDialog: boolean;
  Numpi: any;
  constructor(private serice: SharedService) { }

  ngOnInit(): void {
    this.load();

  }
load(){
  this.serice.getUserA().subscribe((dep) => {
    this.users = dep;
  });
}
openNew() {
  this.productDialog = true;
  this.user = {};
  this.Numpi = 0;
}

edit(user:UserA) {
  this.productDialog = true;
  this.user = user;
  this.Numpi = 1;
}
delet(user:any){
 var events=[
    { title: localStorage.getItem('login')+' deleteuser', start: new Date().toString() }
  ]
  this.serice.addcalender(events).subscribe((res) => alert(res));
  this.serice.deleteUserA(user).subscribe((res) => alert(res));
  this.load();
}
}
