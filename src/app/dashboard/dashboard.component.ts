import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor(public moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    this.moviesService.getMovie().subscribe(
      movies => this.movies = movies.slice(1, 5)
    );
  }

}
