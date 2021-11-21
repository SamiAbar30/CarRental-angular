import { calender } from './../../calender';
import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  CIN:any='';
  pass:any='';
  events:calender[]=[];
  constructor(private serice: SharedService) { }

  ngOnInit(): void {
  }
Login(){
 var user={CIN:this.CIN,pass:this.pass}
  this.serice.Login(user).subscribe((res) =>{
  if(res){
    localStorage.setItem('CIN', this.CIN);
    localStorage.setItem('login',JSON.stringify(true));
    var events=
      { title: localStorage.getItem('login')+' login', start: new Date().toString() };

    this.serice.addcalender(events).subscribe((res) => alert(res));
    location.reload();
  }
  });


}


}
