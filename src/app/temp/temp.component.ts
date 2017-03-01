import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

@Input()
public currentHotel: Hotel;

  constructor() { }

  ngOnInit() {
    console.log(this.currentHotel);
  }

}
