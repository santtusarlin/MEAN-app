import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html'
})

export class NewreviewComponent implements OnInit {

  movies: Array<Movie> = []; // elokuvat tulevat tähän taulukkoon

  constructor(private router: Router, private movieService: MovieService) { }

  getMovies() {
    this.movieService.getMovies().subscribe(data => this.movies = data);
  }

  onSubmit(formData) {
    console.log(formData);
    // tässä pitää valita onko kyseessä uuden lisäys vai muokkaus
    // servicessä on eri metodit postille ja putille

    // lisätään opiskelija ja laitetaan se heti listaan
      this.movieService.addMovie({
        'imgurl': formData.imgurl,
        'name': formData.name,
        'year': formData.year,
        'length': formData.length,
        'rating': formData.rating,
        'genre': formData.genre,
        'review': formData.review
        // samalla kun data tilataan se pushataan komponentin students -taulukkoon
      }).subscribe(data => this.movies.push(data));
      this.router.navigate(['/']);
    }

  ngOnInit() {
    this.getMovies();
  }

}
