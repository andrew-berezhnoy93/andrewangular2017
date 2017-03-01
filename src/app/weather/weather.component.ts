import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

@Input()
public hotels: Hotel[];

@Input()
public currentHotel: Hotel[];


@Output()
public hotel: EventEmitter<Hotel> = new EventEmitter;

 public constructor(
 ) { }

  public ngOnInit(): void {
    console.log('HOTELS', this.hotels);
  }

public hotelSelect(hotel: Hotel): void {
  this.hotel.emit(hotel);
}

}
