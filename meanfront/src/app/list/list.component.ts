import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  movies: Array<Movie> = []; // elokuvat tulevat tähän taulukkoon
// konstruktorissa injektoidaan service list-komponenttiin
  constructor(private movieService: MovieService) {
    this.movieService.getMovies().subscribe(data => this.movies = data);
   }

  ngOnInit() {
  }

}
