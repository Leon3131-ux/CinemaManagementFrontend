import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpResponseErrorHandler} from "../errorHandlers/http-response-error-handler";
import {DefaultErrorHandler} from "../errorHandlers/default-error-handler";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private defaultErrorHandler: DefaultErrorHandler
  ) { }

  getAll<T>(path: string, params?: {params: any}, errorHandler: HttpResponseErrorHandler = this.defaultErrorHandler): Observable<T[]>{
    return this.httpClient.get<T[]>(`${environment.api_url}${path}`, params).pipe(
      catchError(error => {
        if (errorHandler.matches(error)){
          errorHandler.handle(error);
        }else{
          this.defaultErrorHandler.handle(error);
        }
        return of<T[]>();
      })
    );
  }

}
