import {Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SidenavService} from "./services/sidenav.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    private translateService: TranslateService,
    private sidenavService: SidenavService
  ) {}

  ngOnInit(){
    this.translateService.use('de');
    this.sidenavService.sidenavToggled.subscribe(() => {
      this.sidenav.toggle();
    })
  }



}
