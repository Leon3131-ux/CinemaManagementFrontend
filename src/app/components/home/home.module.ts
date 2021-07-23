import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {ShowingPreviewModule} from "../showing-preview/showing-preview.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShowingPreviewModule
  ]
})
export class HomeModule { }
