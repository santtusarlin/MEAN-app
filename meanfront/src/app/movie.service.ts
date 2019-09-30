import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { catchError } from 'rxjs/operators';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'movies'; // apin osoite

  constructor(private http: HttpClient) { } // HttpClientin DI

  // Virheenkäsittelymetodi joka palauttaa observablen
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return (error.message || error);
  }
  // Kaikkien opiskelijoiden haku. Palauttaa observablena opiskelijataulukon
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  /** POST: lisätään elokuva palvelimelle.
   * Movien tyyppi on any, koska _id puuttuu eikä noudateta movie.ts:n mallia.
   * _id jätetään pois opiskelijaa lisättaessä, koska Mongo lisää sen automaattisesti
  */
 addMovie(movie: any): Observable<Movie> {
   // serveri vaatii tokenin jotta kannan muokkaus olisi mahdollista
   const mytoken = JSON.parse(sessionStorage['accesstoken']);
    const tokenheaders = { headers: new HttpHeaders({ 'x-access-token': mytoken.token }) };
  return this.http.post<Movie>(this.apiUrl, movie, tokenheaders)
    .pipe(
      catchError(this.handleError)
    );
}

// PUT: päivitys id:n perusteella
  updateMovie(movie: any):
  Observable<Movie> {
    const mytoken = JSON.parse(sessionStorage['accesstoken']);
    const tokenheaders = { headers: new HttpHeaders({ 'x-access-token': mytoken.token }) };
    const url = `${this.apiUrl}/${movie._id}`;
    return this.http.put<Movie>(url, movie, tokenheaders).pipe(catchError(this.handleError)
    );
  }
  // DEL: poistetaan elokuva
  delMovie(id: string): Observable<Movie> {
    const mytoken = JSON.parse(sessionStorage['accesstoken']);
    const tokenheaders = { headers: new HttpHeaders({ 'x-access-token': mytoken.token }) };
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Movie>(url, tokenheaders).pipe(
      catchError(this.handleError)
    );
  }

}
