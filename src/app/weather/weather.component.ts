import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

public hotels: Hotel[] = [
  {
  id: 0,
  name: 'First inn',
  address: 'Florida',
  phone: '+378099934323',
  photos: [
    'assets/images/res.jpg',
      'assets/images/r1.jpg'
    ]
  },
  {
    id: 1,
    name: 'Second inn',
    address: 'California',
    phone: '+378099934889',
    photos: [
      'assets/images/res.jpg',
        'assets/images/r1.jpg'
    ]
   },
   {
    id: 1,
    name: 'Third inn',
    address: 'Alaska',
    phone: '+378099934567',
    photos: [
      'assets/images/res.jpg',
        'assets/images/r1.jpg'
    ]
   }
];

 public constructor() { }

  public ngOnInit(): void {

  }

}
