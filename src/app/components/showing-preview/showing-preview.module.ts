import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowingPreviewComponent} from "./showing-preview.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
    declarations: [
        ShowingPreviewComponent
    ],
    exports: [
        ShowingPreviewComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class ShowingPreviewModule { }
