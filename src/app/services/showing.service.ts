import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Showing} from "../classes/showing";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ShowingService {

  constructor(private apiService: ApiService) { }

  public getShowingsFromToday(): Observable<Showing[]>{
    return this.apiService.getAll('/showing/getAllOfToday');
  }

}
