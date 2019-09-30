import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  movies: Array<Movie> = [];
  addnew = true;
  saveedited = false;
  imgurl = '';
  name = '';
  year = '';
  length = '';
  rating = '';
  genre = '';
  review = '';
  id = '';

  constructor(private movieService: MovieService) { }

  getMovies() {
    this.movieService.getMovies().subscribe(data => this.movies = data);
}

  onSubmit(formData) {
    console.log(formData);
    // valitaan post tai put
    // post eli uusi elokuva
    if (this.addnew === true) {
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
    }
    // put eli päivitetään elokuva
    if (this.saveedited === true) {
      this.movieService.updateMovie({
        '_id': formData.id,
        'imgurl': formData.imgurl,
        'name': formData.name,
        'year': formData.year,
        'length': formData.length,
        'rating': formData.rating,
        'genre': formData.genre,
        'review': formData.review
      }).subscribe(() => this.getMovies());
      // nollataan asetukset
      this.addnew = true;
      this.saveedited = false;
      this.imgurl = '';
      this.name = '';
      this.year = '';
      this.length = '';
      this.rating = '';
      this.genre = '';
      this.review = '';
      this.id = '';
    }
  }

  delete(m: Movie) {
  console.log('Poistetaan: ' + m._id);
  this.movieService.delMovie(m._id)
    .subscribe(() => this.getMovies());
}

  update(m: Movie) {
    this.imgurl = m.imgurl;
    this.name = m.name;
    this.year = m.year;
    this.length = m.length;
    this.rating = m.rating;
    this.genre = m.genre;
    this.review = m.review;
    this.id = m._id;

    this.addnew = false;
    this.saveedited = true;
  }

  ngOnInit() {
    this.getMovies();
  }

}
