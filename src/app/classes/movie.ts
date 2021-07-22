import {AgeRating} from "./age-rating";

export class Movie {

  id: number;
  name: string;
  description: string;
  runtime: number;
  ageRating: AgeRating;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.runtime = 0;
    this.ageRating = new AgeRating();
  }

}
