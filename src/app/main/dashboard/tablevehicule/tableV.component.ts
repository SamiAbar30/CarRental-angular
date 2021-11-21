import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableV',
  templateUrl: './tableV.component.html',
  styleUrls: ['./tableV.component.scss']
})
export class TableVComponent implements OnInit {
  @Input() vehicules: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
