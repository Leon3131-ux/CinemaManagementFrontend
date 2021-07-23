import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomSnackbarComponent} from "./custom-snackbar.component";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    CustomSnackbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class CustomSnackbarModule { }
