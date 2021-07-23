import { Component, OnInit } from '@angular/core';
import {Showing} from "../../classes/showing";
import {ShowingService} from "../../services/showing.service";
import {TranslateService} from "@ngx-translate/core";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-showing-preview',
  templateUrl: './showing-preview.component.html',
  styleUrls: ['./showing-preview.component.scss']
})
export class ShowingPreviewComponent implements OnInit {

  constructor(
    private showingService: ShowingService,
    public translateService: TranslateService,
  ) { }

  public showings: Showing[] = [];
  public environment = environment;

  ngOnInit(): void {
    this.showingService.getShowingsFromToday().subscribe(showings => {
      showings.forEach(showing => showing.dateTime = new Date(showing.dateTime));
      this.showings = showings;
    })
    console.log(this.translateService.currentLang);
  }

}
