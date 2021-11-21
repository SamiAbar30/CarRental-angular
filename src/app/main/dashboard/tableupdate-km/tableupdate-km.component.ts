import { SharedService } from 'src/app/shared.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableupdate-km',
  templateUrl: './tableupdate-km.component.html',
  styleUrls: ['./tableupdate-km.component.scss']
})
export class TableupdateKMComponent implements OnInit {
  @Input() vehiculeKM: any[]=[];
  constructor(private serice: SharedService) { }

  ngOnInit(): void {
  }
  edit(val:any){
    this.serice.updatevehiculesKM(val).subscribe((res) => alert(res));

  }
}
