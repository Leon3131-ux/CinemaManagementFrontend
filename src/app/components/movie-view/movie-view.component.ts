import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../classes/movie";

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  public environment = environment;
  public movies: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    })
  }

}
