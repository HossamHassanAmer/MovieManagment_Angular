import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  list: any = [
    {
      name: 'Movie title 1',
      description:
        " 1 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      name: 'Movie title 2',
      description:
        " 2 Movie Description some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
}
