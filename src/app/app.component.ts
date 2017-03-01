import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'app works!';

      public hotels: Hotel[] = [
      {
      id: 0,
      name: 'First inn',
      address: 'Florida',
      phone: '+378099934323',
      image: 'assets/images/1.jpg',
      temperature: 5,
      wind: 4,
      followers: 100,
      following: 150,
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
        image: 'assets/images/2.jpg',
        temperature: 27,
        wind: 12,
        followers: 200,
        following: 300,
        photos: [
          'assets/images/res.jpg',
            'assets/images/r1.jpg'
        ]
       },
       {
        id: 2,
        name: 'Third inn',
        address: 'Alaska',
        phone: '+378099934567',
        image: 'assets/images/3.jpg',
        temperature: 3,
        wind: 20,
        followers: 210,
        following: 270,
        photos: [
          'assets/images/res.jpg',
            'assets/images/r1.jpg'
        ]
       }
    ];

    public currentHotel: Hotel = this.hotels[0];

    public hotelSearch(hotel: Hotel): void {
      console.log('hotel', hotel);
      this.currentHotel = hotel;
    }
}
