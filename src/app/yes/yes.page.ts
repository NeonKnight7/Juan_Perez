import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes',
  templateUrl: './yes.page.html',
  styleUrls: ['./yes.page.scss'],
})
export class YesPage implements OnInit {

  discs=[
    {
      id: 'The-Yes-Album',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/The_Yes_Album.png/220px-The_Yes_Album.png',
      year: '1971',
      name: 'The Yes Album'
    },
    {
      id: 'Fragile',
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Fragile_%28Yes_album%29_cover_art.jpg',
      year: '1971',
      name: 'Fragile'
    },
    {
      id: 'Close-to-the-Edge',
      image: 'https://upload.wikimedia.org/wikipedia/en/0/09/Yes-close.jpg',
      year: '1972',
      name: 'Close to the Edge'
    },
    {
      id: 'Relayer',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Relayer_front_cover.jpg/220px-Relayer_front_cover.jpg',
      year: '1974',
      name: 'Relayer'
    },
    {
      id: 'Going-for-the-One',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/95/Yes_Going_for_the_One.jpg',
      year: '1977',
      name: 'Going for the One'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
