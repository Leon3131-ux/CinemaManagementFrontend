import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowingPreviewComponent} from "./showing-preview.component";
import {MatCardModule} from "@angular/material/card";



@NgModule({
    declarations: [
        ShowingPreviewComponent
    ],
    exports: [
        ShowingPreviewComponent
    ],
    imports: [
        CommonModule,
        MatCardModule
    ]
})
export class ShowingPreviewModule { }
