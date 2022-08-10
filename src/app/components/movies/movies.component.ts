import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data, Entry } from '../../interfaces/data.model';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Entry[] = []
  moviesFiltradas: Entry[] = []
  paginaActual:number = 1;
  no_image:string = '../../../assets/no_image.png'

  constructor(
    private _dataService:DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getData().subscribe((data:Data) => {
      this.movies = data.entries.filter((movie:Entry) => movie.programType === 'movie')
      this.moviesFiltradas = JSON.parse(JSON.stringify(this.movies))
      console.log(this.movies)
    })
  }

  searchMovie(value:string){
    value = value.toLowerCase().replace(' ', '');
    this.moviesFiltradas = this.movies.filter(movie => movie.title.toLowerCase().replace(' ', '').includes(value))
  }

}
