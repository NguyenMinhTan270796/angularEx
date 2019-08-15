import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
// import { fakeMovies } from '../fake-movies';
import { MoviesService } from '../movies.service';
import { MessagesService } from '../messages.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, transform: 'translateX(500px)'})),
      transition(':enter, :leave', [
        animate(1000)
      ]),
    ])
  ]
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: 'Star Wars',
    releaseYear: 1977,
  };
  movies: Movie[];
  constructor(private moviesService: MoviesService, public messagesService: MessagesService) { }

  ngOnInit() {
    this.getMoviesFromService();
  }

  getMoviesFromService(): void {
    // this.movies = this.moviesService.getMovie();
    this.moviesService.getMovie().subscribe(
      (updatedMovies) => {
        this.movies = updatedMovies;
      }
    );
  }

  add(name: string, releaseYear: string): void {
    name = name.trim();
    if (Number.isNaN(Number(releaseYear)) || Number(releaseYear) === 0) {
      alert('Release year must be a number');
      return;
    } else {
      if (!name) {
        alert('Name must not be blank');
        return;
      } else {
        const newMovie: Movie = new Movie();
        newMovie.name = name;
        newMovie.releaseYear = Number(releaseYear);
        this.moviesService.addMovie(newMovie)
          .subscribe(result => {
            this.movies.push(result);
          });
      }
    }
  }

  delete(movieId: number): void {
    this.moviesService.deleteMovie(movieId).subscribe(() => {
      this.movies = this.movies.filter(eachMovie => eachMovie.id !== movieId);
    });
  }
}
