import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomSnackbarComponent} from "../components/custom-snackbar/custom-snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  public error(title: string, message: string, duration: number){
    this.snackbar.openFromComponent(CustomSnackbarComponent, {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'error',
      data: {
        title: title,
        message: message
      }
    })
  }

}
