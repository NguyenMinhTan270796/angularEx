import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  @Input() movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getMovieFromRoute();
  }

  getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.moviesService.getMovieFromId(id).subscribe(movie => this.movie = movie);
  }
  save(): void {
    this.moviesService.updateMovie(this.movie).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
