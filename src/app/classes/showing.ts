import {Movie} from "./movie";
import {ShowingHall} from "./showing-hall";

export class Showing {

  id: number;
  movie: Movie;
  showingHall: ShowingHall;
  dateTime: Date;

  constructor() {
    this.id = 0;
    this.movie = new Movie();
    this.showingHall = new ShowingHall();
    this.dateTime = new Date();
  }

}
