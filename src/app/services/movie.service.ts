import { Injectable } from '@angular/core';
import {Movie} from '../models/movie.class'
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movies: Movie[] = [
    new Movie(1, 'Bo Gia', 'https://www.youtube.com/watch?v=Lz8nvVp3MNE','Tran Thanh'),
    new Movie(2,'Vuot Nguc','https://www.youtube.com/watch?v=hd2HAtSBobs','Michale Scofield')
  ]
  constructor() { }
  getAllMovie() {
    return this.movies
  }
  addMovie(movie: Movie) {
    movie.id = this.getLastId(this.movies)
    this.movies.push(movie)
  }
  getLastId(movies:any) {
    let lastID = movies.length > 0 ? movies.sort((a: any, b:any) => {
      if (a.id > b.id) return -1;
      else if (a.id < b.id) return 1;
      else return 0;
    })[0].id + 1 : 1
    return lastID;
  }
}
