import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Movie} from "../classes/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }

  public getMovies(): Observable<Movie[]>{
    return this.apiService.getAll('/movie/getAll');
  }

}
