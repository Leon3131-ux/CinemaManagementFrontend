import { Component, OnInit } from '@angular/core';
import {Showing} from "../../classes/showing";
import {ShowingService} from "../../services/showing.service";

@Component({
  selector: 'app-showing-preview',
  templateUrl: './showing-preview.component.html',
  styleUrls: ['./showing-preview.component.scss']
})
export class ShowingPreviewComponent implements OnInit {

  constructor(private showingService: ShowingService) { }

  public showings: Showing[] = [];

  ngOnInit(): void {
    this.showingService.getShowingsFromToday().subscribe(showings => {
      this.showings = showings;
      console.log(this.showings);
    })
  }

}
