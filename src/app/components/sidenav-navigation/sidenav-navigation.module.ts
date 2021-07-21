import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavNavigationComponent} from "./sidenav-navigation.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    SidenavNavigationComponent
  ],
  exports: [
    SidenavNavigationComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatListModule
  ]
})
export class SidenavNavigationModule { }
