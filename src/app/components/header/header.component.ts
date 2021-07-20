import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    console.log(this.translateService.instant('navigation.movies'))
    console.log(this.translateService.currentLang)
  }

}
