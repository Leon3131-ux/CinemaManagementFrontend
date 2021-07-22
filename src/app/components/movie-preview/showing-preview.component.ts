import { Component, OnInit } from '@angular/core';
import {Showing} from "../../classes/showing";

@Component({
  templateUrl: './showing-preview.component.html',
  styleUrls: ['./showing-preview.component.scss']
})
export class ShowingPreviewComponent implements OnInit {

  constructor() { }

  public showings: Showing[] = [];

  ngOnInit(): void {
  }

}
