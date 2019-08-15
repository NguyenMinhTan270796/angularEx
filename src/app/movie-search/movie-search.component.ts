import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  movies$: Observable<Movie[]>;
  // movies$ = this.moviesService.getMovie();
  private searchdSubject = new Subject<string>();

  constructor(private moviesService: MoviesService) { }

  search(searchedString: string): void {
    this.searchdSubject.next(searchedString);
  }

  ngOnInit() {
    this.movies$ = this.searchdSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchedString: string) => this.moviesService.searchMovie(searchedString))
    );
  }

}
