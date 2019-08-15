import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Login } from '../models/login';

@Injectable()
export class MoviesService {
  private movieURL = 'http://localhost:3000/movies';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getMovie(): Observable<Movie[]> {
    // this.messagesService.add(`${new Date().toLocaleString()}. Get movie list`);
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.movieURL).pipe(
      tap(receivedMovies => console.log()),
      catchError(error => of([]))
    );
  }

  getMovieFromId(id: number): Observable<Movie> {
    // return of(fakeMovies.find(movie => movie.id === id));
    const url = `${this.movieURL}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(receivedMovies => console.log()),
      catchError(error => of(new Movie()))
    );
  }

  updateMovie(movie: Movie): Observable<any> {
    return this.http.put(`${this.movieURL}/${movie.id}`, movie, this.httpOptions).pipe(
      tap(receivedMovies => console.log()),
      catchError(error => of(new Movie()))
    );
  }

  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.movieURL, newMovie, this.httpOptions).pipe(
      tap(receivedMovies => console.log()),
      catchError(error => of(new Movie()))
    );
  }

  deleteMovie(movieId: number): Observable<Movie> {
    const url = `${this.movieURL}/${movieId}`;
    return this.http.delete<Movie>(url, this.httpOptions).pipe(
      tap(receivedMovies => console.log()),
      catchError(error => of(null))
    );
  }

  searchMovie(typedString: string): Observable<Movie[]> {
    const url = `${this.movieURL}?name_like=${typedString}`;
    if (!typedString || !typedString.length) {
      return of([]);
      // return this.http.get<Movie[]>(this.movieURL);
    }
    return this.http.get<Movie[]>(url).pipe(
      tap(receivedMovies => console.log()),
      catchError(error => of(null))
    );
  }

  login(email: string, password: string): Observable<Login> {
    const url = `https://dev-api.forma-veo.com/api/FormaVeoUsers/login`;
    const data = {
      email: email,
      password: password,
    };
    return this.http.post<Login>(url, data, this.httpOptions);
  }

  constructor(
    public messagesService: MessagesService,
    private http: HttpClient,
  ) { }

}


