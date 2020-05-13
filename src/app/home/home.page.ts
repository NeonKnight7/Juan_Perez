import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  groups=[
    {
      id: 'yes',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Yes_concert.jpg/800px-Yes_concert.jpg',
      name: 'Yes'
    }
  ];
  constructor() {}

}
