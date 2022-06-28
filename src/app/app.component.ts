import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title='';


  login:any ;

  ngOnInit(): void {
   
       this.login = localStorage.getItem('login')??false;
  }
}
