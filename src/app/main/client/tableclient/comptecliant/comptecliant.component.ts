import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comptecliant',
  templateUrl: './comptecliant.component.html',
  styleUrls: ['./comptecliant.component.scss']
})
export class ComptecliantComponent implements OnInit {
 @Input() items:any[];
  constructor() { }

  ngOnInit(): void {

  }

}
