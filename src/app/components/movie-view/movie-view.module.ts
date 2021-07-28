import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieViewComponent} from "./movie-view.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    MovieViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class MovieViewModule { }
